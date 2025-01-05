import type { Ref } from '@typegoose/typegoose';
import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

import { KeyboardLayout } from '@/entities/keyboard/model/KeyboardLayout';
import { type KeyCode, ModifierKey } from '@/shared/types';

@modelOptions({ schemaOptions: { _id: false } })
class KeyInput {
  @prop({ type: String, required: true })
  public keyCode!: KeyCode;

  @prop({ type: String, required: true })
  public modifier!: ModifierKey;
}

export class Exercise {
  @prop({ ref: 'KeyboardLayout', required: true })
  public layoutId!: Ref<KeyboardLayout>;

  @prop({ type: () => KeyInput, required: true })
  public chars!: KeyInput[];
}

const ExerciseModel = getModelForClass(Exercise, { schemaOptions: { timestamps: true } });

export default ExerciseModel;
