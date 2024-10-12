import { baseKeyIds } from '@/entities/keyboard';

export enum KeyFingerMappingSchemeType {
  Standard = 'standard',
  User = 'user',
}

// TODO: проверить правильно ли используется т.к. нет Space (но он был)
export const keyIdsForFingerMappingScheme = [
  ...baseKeyIds,
  // TODO: ошибка из-за неправильных реекспортов
  'Space_Right', //
  'Space_Left', //
] as const;

export type KeyIdForFingerMappingScheme = (typeof keyIdsForFingerMappingScheme)[number];

export const keyFingerMappingSchemeIds = ['optimized', 'logical', 'custom'] as const;
export type KeyFingerMappingSchemeId = (typeof keyFingerMappingSchemeIds)[number];
