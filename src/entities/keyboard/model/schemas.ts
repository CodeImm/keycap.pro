import { z } from 'zod';

import { Finger, System, fingerMappingKeyIds, keyboardFormats, layoutIds } from '@/entities/keyboard';

export const KeyboardConfigurationSchema = z.object({
  keyboardLayoutId: z.enum(layoutIds),
  keyboardFormat: z.enum(keyboardFormats),
  system: z.nativeEnum(System),
});

export const KeyFingerMappingSchema = z.record(z.enum(fingerMappingKeyIds), z.nativeEnum(Finger));

export const SaveKeyboardSettingsRequestSchema = z.object({
  keyFingerMappingSchema: KeyFingerMappingSchema,
  keyboardConfiguration: KeyboardConfigurationSchema,
});
