import crypto from 'crypto';

import { KeyFingerMappingScheme, KeyIdForFingerMappingScheme } from '../model/types';

export function generateHash(keyFingerMappingScheme: KeyFingerMappingScheme): string {
    const hash = crypto.createHash('sha256');
    const sortedKeys = Object.keys(keyFingerMappingScheme).sort() as KeyIdForFingerMappingScheme[];
    const sortedScheme = sortedKeys.reduce((acc: any, key) => {
      acc[key] = keyFingerMappingScheme[key];
      return acc;
    }, {});
    hash.update(JSON.stringify(sortedScheme));
    console.log(hash);
    return hash.digest('hex');
  }
