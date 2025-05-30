import crypto from 'crypto';
import mongoose from 'mongoose';

import { ExerciseType } from '@/entities/exercise';
import ExerciseModel from '@/entities/exercise/model/Exercise';
import ExerciseSetExerciseModel from '@/entities/exercise/model/ExerciseSetExercise';
import ExerciseSetModel from '@/entities/exercise/model/ExercixeSet';
import KeyboardProfileModel from '@/entities/keyboard/model/KeyboardProfile';
import { Finger, KeyCode } from '@/shared/types';

import { getKeyInputs } from './getKeyInputs';

import dbConnect from '../../config/mongodb/dbConnect';

export async function seedExerciseSets() {
  try {
    await dbConnect();

    const profiles = await KeyboardProfileModel.find({}).populate(['geometry', 'layout', 'keyFingerMappingScheme']);
    if (!profiles.length) {
      console.warn('No profiles found.');
      return [];
    }
    // console.log({ profiles });
    await ExerciseSetModel.deleteMany({});
    await ExerciseModel.deleteMany({});
    await ExerciseSetExerciseModel.deleteMany({});

    const exerciseSets = [];
    const exercises = [];
    const exerciseSetExercises = [];

    for (const profile of profiles) {
      //1.  Create ExerciseSet
      const set = await ExerciseSetModel.create({
        keyboardProfile: profile._id,
        version: 0,
        generated: false,
      });
      exerciseSets.push(set);

      // 2. Генерируем упражнения
      const keyInputs = getKeyInputs(profile as any);

      for (let i = 0; i < keyInputs.length; i++) {
        const exerciseKeyInputs = keyInputs[i];

        // console.log({ exerciseKeyInputs });
        const rawMapping = profile.keyFingerMappingScheme?.keyFingerMappingScheme ?? {};

        const keyFingerMapping: Partial<Record<KeyCode, Finger[]>> = {};

        for (const { code } of exerciseKeyInputs) {
          const fingers = rawMapping[code];
          if (fingers?.length) {
            // Копируем и сортируем массив, чтобы не мутировать оригинальные данные
            keyFingerMapping[code] = [...fingers].sort((a, b) => a - b);
          }
        }

        const sortedKeys = exerciseKeyInputs
          .map(({ code, modifier }) => {
            const fingers = keyFingerMapping[code]?.join(',') ?? '';
            return `${code}:${modifier}:${fingers}`;
          })
          .sort()
          .join(';');
        const sortedHomeRow = Object.entries(profile.homeRow)
          .sort(([a], [b]) => Number(a) - Number(b)) // сортировка по ключам (Finger от 0 до 9)
          .map(([, keyCode]) => keyCode)
          .join(';');
        const input = `${profile.geometry._id}_${sortedHomeRow}_${sortedKeys}`;
        const hash = crypto.createHash('sha256').update(input).digest('hex');

        // Сохраняем упражнение
        let exercise = await ExerciseModel.findOne({ hash });

        if (!exercise) {
          exercise = await ExerciseModel.create({
            geometry: profile.geometry._id,
            homeRow: profile.homeRow,
            keyInputs: exerciseKeyInputs,
            keyFingerMapping,
            type: ExerciseType.Basic,
            hash,
            difficulty: 1,
          });
        }

        // 3. Сохраняем связь
        await ExerciseSetExerciseModel.create({
          exerciseSet: set._id,
          exercise: exercise._id,
          order: i,
        });
      }
    }

    console.log(
      `Seeded ${exerciseSets.length} sets, ${exercises.length} exercises, ${exerciseSetExercises.length} set-exercises.`
    );
  } catch (error) {
    console.error('Error seeding:', error);
    throw error;
  } finally {
    await mongoose.disconnect();
  }
}

seedExerciseSets();
