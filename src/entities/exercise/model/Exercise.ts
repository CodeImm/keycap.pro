import type { Ref } from '@typegoose/typegoose';
import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

// import { createHash } from 'crypto';
import { KeyboardLayout } from '@/entities/keyboard/model/KeyboardLayout';
import { type KeyCode, ModifierKey } from '@/shared/types';

import { ExerciseType } from './types';

@modelOptions({ schemaOptions: { _id: false } })
class KeyInput {
  @prop({ type: String, required: true })
  public сode!: KeyCode;

  @prop({ type: String, required: true })
  public modifier!: ModifierKey;
}

export class Exercise {
  @prop({ ref: 'KeyboardLayout', required: true })
  public layout!: Ref<KeyboardLayout>;

  @prop({ type: () => KeyInput, required: true })
  public keys!: KeyInput[];

  @prop({ type: String, required: true, unique: true })
  public slug!: string;

  @prop({ type: String, required: true, enum: ExerciseType })
  public type!: ExerciseType;

  @prop({ required: true, unique: true })
  public hash!: string; // Поле для хранения хэша

  // Метод для генерации хэша
  // public static generateHash(exercise: Partial<Exercise>): string {
  //   const hash = createHash('sha256');
  //   hash.update(`${exercise.name}-${exercise.layout}-${exercise.keyboardProfile}`);
  //   return hash.digest('hex');
  // }
}

const ExerciseModel = getModelForClass(Exercise, { schemaOptions: { timestamps: true } });

export default ExerciseModel;
