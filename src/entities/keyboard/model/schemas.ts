import { z } from 'zod';

import { KeyFingerMapping } from '@/entities/keyboard';

export const SaveKeyboardSettingsRequestSchema = z.object({
  fingersZonesSchema: KeyFingerMapping,
  layout: KeyboardLayoutConfig,
});
