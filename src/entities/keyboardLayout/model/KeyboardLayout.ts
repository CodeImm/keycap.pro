import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

import type { KeyCode, KeyModifier } from '@/shared/types';
import { KeyboardLayoutId, KeyType } from '@/shared/types';

@modelOptions({ schemaOptions: { _id: false } })
class LayoutKeyInfo {
  @prop({ required: true, type: String })
  public key!: string;

  @prop({ required: true, enum: KeyType, type: String })
  public type!: KeyType;

  @prop({ type: String })
  public alternate?: KeyCode;
}

export class KeyboardLayout {
  @prop({ enum: KeyboardLayoutId, type: String, required: false })
  public layoutId?: KeyboardLayoutId;

  // TODO: уточнить тип, если возможно
  @prop({ type: Object, _id: false, required: true })
  public layoutKeys!: Record<KeyModifier, Record<KeyCode, LayoutKeyInfo>>;
}

const KeyboardLayoutModel = getModelForClass(KeyboardLayout, { schemaOptions: { timestamps: true } });

export default KeyboardLayoutModel;
