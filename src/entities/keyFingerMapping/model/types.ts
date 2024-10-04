import { z } from 'zod';

import { baseKeyIds } from '@/entities/keyboard';

import { HomeRowSchema } from './schemas';

export enum KeyFingerMappingSchemeType {
  Standard = 'standard',
  User = 'user',
}

export type HomeRow = z.infer<typeof HomeRowSchema>;

// TODO: проверить правильно ли используется т.к. нет Space (но он был)
export const keyIdsForFingerMappingScheme = [
  ...baseKeyIds,
  'Space_Right', //
  'Space_Left', //
] as const;

export type KeyIdForFingerMappingScheme = (typeof keyIdsForFingerMappingScheme)[number];

export const keyFingerMappingSchemeIds = ['optimized', 'logical', 'custom'] as const;
export type KeyFingerMappingSchemeId = (typeof keyFingerMappingSchemeIds)[number];
