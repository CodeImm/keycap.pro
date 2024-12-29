import { Finger } from '@/shared/types';

import { LayoutKeyId } from '@/entities/keyboard';
import { HomeRow } from '../model/schemas';

export const DEFAULT_HOME_ROW: HomeRow = {
  [Finger.LEFT_PINKIE]: 'KeyA',
  [Finger.LEFT_RING]: 'KeyS',
  [Finger.LEFT_MIDDLE]: 'KeyD',
  [Finger.LEFT_INDEX]: 'KeyF',
  [Finger.LEFT_THUMB]: 'Space_Left',
  [Finger.RIGHT_THUMB]: 'Space_Right',
  [Finger.RIGHT_INDEX]: 'KeyJ',
  [Finger.RIGHT_MIDDLE]: 'KeyK',
  [Finger.RIGHT_RING]: 'KeyL',
  [Finger.RIGHT_PINKIE]: 'Semicolon',
} as const;

export const DEFAULT_HOMING_KEYS: LayoutKeyId[] = ['KeyF', 'KeyJ'] as const;
