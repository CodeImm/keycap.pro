import { getModelForClass, prop } from '@typegoose/typegoose';

import { type KeyFingerMappingScheme, KeyFingerMappingSchemeType } from './types';

export class KeyFingerMapping {
  @prop({ type: String, enum: KeyFingerMappingSchemeType, required: true, default: KeyFingerMappingSchemeType.Custom })
  public schemeType!: KeyFingerMappingSchemeType;

  @prop({ type: String, required: true })
  public name!: string;

  @prop({ type: String })
  public description?: string;

  // TODO: заменить Object
  @prop({ _id: false, type: () => Object })
  public keyFingerMappingScheme!: KeyFingerMappingScheme;
}

const KeyFingerMappingModel = getModelForClass(KeyFingerMapping, { schemaOptions: { timestamps: true } });

export default KeyFingerMappingModel;
