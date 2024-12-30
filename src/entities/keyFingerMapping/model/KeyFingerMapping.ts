import { getModelForClass, pre, prop } from '@typegoose/typegoose';
import crypto from 'crypto';

import { Finger, KeyCode } from '@/shared/types';

import { KeyFingerMappingSchemeType, } from './types';

@pre<KeyFingerMapping>('save', function () {
  this.hash = this.generateHash();
})
export class KeyFingerMapping {
  @prop({ type: String, enum: KeyFingerMappingSchemeType, required: true, default: KeyFingerMappingSchemeType.Custom })
  public schemeType!: KeyFingerMappingSchemeType;

  @prop({ type: String, required: false })
  public name?: string;

  @prop({ type: String })
  public description?: string;

  @prop({ _id: false, type: Map<KeyCode, Finger[]> })
  public keyFingerMappingScheme!: KeyFingerMapping;

  @prop({ type: String, required: false })
  public hash!: string;

  private generateHash(): string {
    const hash = crypto.createHash('sha256');
    const sortedKeys = Object.keys(this.keyFingerMappingScheme).sort() as KeyCode[];
    const sortedScheme = sortedKeys.reduce((acc: any, key) => {
      acc[key] = this.keyFingerMappingScheme[key];
      return acc;
    }, {});
    hash.update(JSON.stringify(sortedScheme));
    return hash.digest('hex');
  }
}


const KeyFingerMappingModel = getModelForClass(KeyFingerMapping, { schemaOptions: { timestamps: true } });

export default KeyFingerMappingModel;
