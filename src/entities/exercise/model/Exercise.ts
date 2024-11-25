import type { Ref } from '@typegoose/typegoose';
import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

import type { LayoutKeyId } from '@/entities/keyboard';
import { KeyModifier } from '@/entities/keyboardLayout';
import { KeyboardLayout } from '@/entities/keyboardLayout/model/KeyboardLayout';

@modelOptions({ schemaOptions: { _id: false } })
class Char {
  @prop({ type: String, required: true })
  public code!: LayoutKeyId;

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
