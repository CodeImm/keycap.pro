import type { Ref } from '@typegoose/typegoose';
import { getModelForClass, prop } from '@typegoose/typegoose';

import { KeyboardProfile } from '@/entities/keyboard/model/KeyboardProfile';
import { Exercise } from './Exercise';

export class ExerciseSet {
  // @prop({ type: String })
  // public name?: string;

  // @prop({ type: String })
  // public description?: string;

  @prop({ ref: 'Exercise', required: true })
  public exercises!: Ref<Exercise>[];

  @prop({ ref: 'KeyboardProfile', required: true })
  public keyboardProfile!: Ref<KeyboardProfile>;

  @prop({ type: Number, required: true, default: 0 })
  public version!: number;

  @prop({ type: Boolean, default: true })
  public generated?: boolean;
}

const ExerciseSetModel = getModelForClass(ExerciseSet, { schemaOptions: { timestamps: true } });

export default ExerciseSetModel;
