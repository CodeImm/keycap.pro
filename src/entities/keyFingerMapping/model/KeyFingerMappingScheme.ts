import { getModelForClass, pre, prop } from '@typegoose/typegoose';
import crypto from 'crypto';

import type { KeyFingerMapping } from '@/shared/types';

import { KeyFingerMappingSchemeType } from './types';

@pre<KeyFingerMappingScheme>('save', function () {
  this.hash = KeyFingerMappingScheme.generateHash(this.keyFingerMappingScheme);
})
export class KeyFingerMappingScheme {
  @prop({ type: String, enum: KeyFingerMappingSchemeType, required: true })
  public schemeType!: KeyFingerMappingSchemeType;

  @prop({ type: Object, required: true })
  public keyFingerMappingScheme!: KeyFingerMapping;

  @prop({ type: String, required: true })
  public hash!: string;

  public static generateHash(scheme: KeyFingerMapping): string {
    const hash = crypto.createHash('sha256');
    const sortedScheme = new Map([...Object.entries(scheme)].sort());
    return hash.update(JSON.stringify(Object.fromEntries(sortedScheme))).digest('hex');
  }
}

const KeyFingerMappingSchemeModel = getModelForClass(KeyFingerMappingScheme, { schemaOptions: { timestamps: true } });

export default KeyFingerMappingSchemeModel;
