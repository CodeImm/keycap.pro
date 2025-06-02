import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

import type { KeyCode, KeyInput, ModifierKey } from '@/shared/types';
import { KeyType, KeyboardLayoutId } from '@/shared/types';

@modelOptions({ schemaOptions: { _id: false } })
class KeyDefinition {
  @prop({ required: true, type: String })
  public char!: string;

  @prop({ required: true, enum: KeyType, type: String })
  public type!: KeyType;

  @prop({ type: () => [{ code: String, modifier: String }] })
  public alternates?: KeyInput[];
}

export class KeyboardLayout {
  @prop({ enum: KeyboardLayoutId, type: String, required: true, unique: true, index: true })
  public layoutId!: KeyboardLayoutId;

  @prop({ type: Object, _id: false, required: true })
  public layoutMap!: Record<ModifierKey, Record<KeyCode, KeyDefinition>>;
}

const KeyboardLayoutModel = getModelForClass(KeyboardLayout, { schemaOptions: { timestamps: true } });

export default KeyboardLayoutModel;
