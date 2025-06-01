import type { Ref } from '@typegoose/typegoose';
import { getModelForClass, prop } from '@typegoose/typegoose';

import { Exercise } from './Exercise';
import { ExerciseSet } from './ExercixeSet';

class ExerciseSetExercise {
  @prop({ required: true, ref: () => ExerciseSet })
  public exerciseSet!: Ref<ExerciseSet>;

  @prop({ required: true, ref: () => Exercise, index: true })
  public exercise!: Ref<Exercise>;

  @prop({ type: Number, default: 0 })
  public order!: number;
}

const ExerciseSetExerciseModel = getModelForClass(ExerciseSetExercise, { schemaOptions: { timestamps: true } });

export default ExerciseSetExerciseModel;
