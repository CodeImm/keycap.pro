import { z } from 'zod';

import { KeyFingerMappingSchema } from '@/entities/keyFingerMapping';
import { System } from '@/entities/keyboard';
import { KeyboardFormat, KeyboardLayoutId } from '@/shared/types';

export const KeyboardConfigurationSchema = z.object({
  keyboardLayoutId: z.nativeEnum(KeyboardLayoutId),
  keyboardFormat: z.nativeEnum(KeyboardFormat),
  system: z.nativeEnum(System),
});

export const SaveKeyboardSettingsRequestSchema = z.object({
  keyFingerMappingSchema: KeyFingerMappingSchema,
  keyboardConfiguration: KeyboardConfigurationSchema,
});
