import { KeyFingerMappingSchemeType } from '@/entities/keyFingerMapping';
import { KeyFingerMappingScheme } from '@/entities/keyFingerMapping/model/KeyFingerMappingScheme';
import { KeyboardGeometry } from '@/entities/keyboard';
import { KeyboardLayout } from '@/entities/keyboard/model/KeyboardLayout';
import { KeyInput } from '@/shared/types';

import { exercisesForLogicalKeyFingerMappings } from './data/logical';
import { exercisesForOptimizedKeyFingerMappings } from './data/optimized';

// Интерфейс для популированного KeyboardProfile
interface PopulatedKeyboardProfile {
  geometry: KeyboardGeometry; // Populated, not ObjectId
  layout: KeyboardLayout; // Populated, not ObjectId
  keyFingerMappingScheme: KeyFingerMappingScheme; // Populated, not ObjectId
  homeRow: string[];
}

export function getKeyInputs(profile: PopulatedKeyboardProfile): KeyInput[][] {
  const homeRowKeys = profile.homeRow;
  const keyFingerMappingSchemeType = profile.keyFingerMappingScheme!.schemeType; // Record<string, string[]>
  const format = profile.geometry!.format; // string (Ansi, Iso)
  const formFactor = profile.geometry!.formFactor; // string (FullSize, TKL, etc.)
  const layout = profile.layout!.layoutId; // string (us_qwerty, etc.)

  console.log({ homeRowKeys, keyFingerMappingSchemeType, format, formFactor, layout });

  return (
    keyFingerMappingSchemeType === KeyFingerMappingSchemeType.LOGICAL
      ? exercisesForLogicalKeyFingerMappings
      : exercisesForOptimizedKeyFingerMappings
  ).map((v) => v.keys);
}
