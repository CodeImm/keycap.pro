import ExerciseModel from './../../../entities/exercise/model/Exercise';
import ExerciseSetModel from './../../../entities/exercise/model/ExercixeSet';
import KeyboardProfileModel from './../../../entities/keyboard/model/KeyboardProfile';

import mongoose from 'mongoose';

import { KeyboardFormat, KeyboardLayoutId } from '@/shared/types';

import dbConnect from '../../config/mongodb/dbConnect';
import { exercisesForOptimizedKeyFingerMappings } from '../Exercise';

export async function seedKeyboardProfiles(keyFingerMappings: any, keyboardLayouts: any) {
  try {
    await dbConnect();

    await KeyboardProfileModel.deleteMany();
    await ExerciseModel.deleteMany();
    await ExerciseSetModel.deleteMany();

    const savedExercises = [];

    for (const { id, name } of keyFingerMappings) {
      console.log(id, name);

      const keyboardLayoutId = keyboardLayouts.find((k) => k.layoutId === KeyboardLayoutId.UsQwerty)._id;

      const keyboardProfilesForKeyFingerMapping = [
        {
          // formFactor: FormFactor.SixtyPercent,
          format: KeyboardFormat.Ansi,
          layout: keyboardLayoutId,
          keyFingerMappingScheme: id,
          // homeRow: DEFAULT_HOME_ROW,
        },
        {
          // formFactor: FormFactor.SixtyPercent,
          format: KeyboardFormat.Iso,
          layout: keyboardLayoutId,
          keyFingerMappingScheme: id,
          // homeRow: DEFAULT_HOME_ROW,
        },
      ];

      const keyboardProfiles = await KeyboardProfileModel.insertMany(keyboardProfilesForKeyFingerMapping);
      console.log('Keyboard profiles inserted successfully!', keyboardProfiles);

      console.log(keyboardLayoutId);

      if (savedExercises.length === 0) {
        exercisesForOptimizedKeyFingerMappings.map((e) => ({
          ...e,
          layout: keyboardLayoutId,
        }));
        savedExercises = await ExerciseModel.insertMany(exercisesForOptimizedKeyFingerMappings);
        console.log('Keyboard exercises inserted successfully!', savedExercises);
      }

      const exerciseSets = keyboardProfiles.map((k) => ({
        name: '',
        description: '',
        exercises: savedExercises.map((s) => s._id),
        keyboardProfile: k._id,
      }));

      const savedExerciseSets = await ExerciseSetModel.insertMany(exerciseSets);
      console.log('Keyboard exerciseSets inserted successfully!', savedExerciseSets);
    }

    console.log('Test!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
  }
}