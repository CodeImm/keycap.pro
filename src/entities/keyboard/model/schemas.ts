import { z } from 'zod';

import { KeyFingerMappingSchema } from '@/entities/keyFingerMapping';
import { LayoutId, System, keyboardFormats } from '@/entities/keyboard';

export const KeyboardConfigurationSchema = z.object({
  keyboardLayoutId: z.nativeEnum(LayoutId),
  keyboardFormat: z.enum(keyboardFormats),
  system: z.nativeEnum(System),
});

export const SaveKeyboardSettingsRequestSchema = z.object({
  keyFingerMappingSchema: KeyFingerMappingSchema,
  keyboardConfiguration: KeyboardConfigurationSchema,
});
