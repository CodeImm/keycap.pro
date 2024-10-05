import { Finger } from '..';
import { HomeRow, KeyIdForFingerMappingScheme } from '../model/types';

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
  [Finger.RIGHT_PINKIE]: 'KeyL',
};

export const DEFAULT_PROMINENT_KEYS: KeyIdForFingerMappingScheme[] = ['KeyF', 'KeyJ'];
