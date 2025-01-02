import type { Ref } from '@typegoose/typegoose';
import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

import { KeyboardLayout } from '@/entities/keyboard/model/KeyboardLayout';
import { type KeyCode, KeyModifier } from '@/shared/types';

@modelOptions({ schemaOptions: { _id: false } })
class Char {
  @prop({ type: String, required: true })
  public code!: KeyCode;

  @prop({ type: String, required: true })
  public modifier!: KeyModifier;
}

export class Exercise {
  @prop({ ref: 'KeyboardLayout', required: true })
  public layoutId!: Ref<KeyboardLayout>;

  @prop({ type: () => Char, required: true })
  public chars!: Char[];
}

const ExerciseModel = getModelForClass(Exercise, { schemaOptions: { timestamps: true } });

export default ExerciseModel;
