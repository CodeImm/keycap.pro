import { getModelForClass, prop } from '@typegoose/typegoose';

export class KeyFingerMapping {
  @prop({ required: true })
  public name!: string;
}

const KeyFingerMappingModel = getModelForClass(KeyFingerMapping, { schemaOptions: { timestamps: true } });

export default KeyFingerMappingModel;
