import { KeyCode, KeyFingerMapping } from '@/shared/types';
import crypto from 'crypto';

export function generateHash(keyFingerMappingScheme: KeyFingerMapping): string {
    const hash = crypto.createHash('sha256');
    const sortedKeys = Object.keys(keyFingerMappingScheme).sort() as KeyCode[];
    const sortedScheme = sortedKeys.reduce((acc: any, key) => {
      acc[key] = keyFingerMappingScheme[key];
      return acc;
    }, {});
    hash.update(JSON.stringify(sortedScheme));
    console.log(hash);
    return hash.digest('hex');
  }
