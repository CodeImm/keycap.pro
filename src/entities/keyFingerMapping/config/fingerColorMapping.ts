import { Finger } from '@/shared/types';

import { FingerColorMapping } from '../model/schemas';

export const DEFAULT_FINGER_COLOR_MAPPING: FingerColorMapping = {
  [Finger.LEFT_PINKIE]: '#f4b3c2',
  [Finger.LEFT_RING]: '#fdcf8c',
  [Finger.LEFT_MIDDLE]: '#bcdd9c',
  [Finger.LEFT_INDEX]: '#a3dce0',
  [Finger.LEFT_THUMB]: '#aec6e0',
  [Finger.RIGHT_THUMB]: '#aec6e0',
  [Finger.RIGHT_INDEX]: '#a3dce0',
  [Finger.RIGHT_MIDDLE]: '#bcdd9c',
  [Finger.RIGHT_RING]: '#fdcf8c',
  [Finger.RIGHT_PINKIE]: '#f4b3c2',
} as const;
