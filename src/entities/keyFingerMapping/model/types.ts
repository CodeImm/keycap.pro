export enum KeyFingerMappingSchemeType {
  Standard = 'standard',
  Custom = 'custom',
}

export const keyFingerMappingSchemeIds = ['optimized', 'logical', 'custom'] as const;
export type KeyFingerMappingSchemeId = (typeof keyFingerMappingSchemeIds)[number];
