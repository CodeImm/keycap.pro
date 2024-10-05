import { z } from 'zod';

import { KeyIdForFingerMappingScheme, keyIdsForFingerMappingScheme } from './types';

export enum Finger {
  LEFT_PINKIE,
  LEFT_RING,
  LEFT_MIDDLE,
  LEFT_INDEX,
  LEFT_THUMB,
  RIGHT_THUMB,
  RIGHT_INDEX,
  RIGHT_MIDDLE,
  RIGHT_RING,
  RIGHT_PINKIE,
}

export type KeyFingerMappingScheme = {
  [key in KeyIdForFingerMappingScheme]?: Finger;
};

export type FingerColorMapping = {
  [key in Finger]: string;
};

export const HomeRowSchema = z
  .object({
    [Finger.LEFT_PINKIE]: z.enum(keyIdsForFingerMappingScheme).optional(),
    [Finger.LEFT_RING]: z.enum(keyIdsForFingerMappingScheme).optional(),
    [Finger.LEFT_MIDDLE]: z.enum(keyIdsForFingerMappingScheme).optional(),
    [Finger.LEFT_INDEX]: z.enum(keyIdsForFingerMappingScheme).optional(),
    [Finger.LEFT_THUMB]: z.enum(keyIdsForFingerMappingScheme).optional(),
    [Finger.RIGHT_THUMB]: z.enum(keyIdsForFingerMappingScheme).optional(),
    [Finger.RIGHT_INDEX]: z.enum(keyIdsForFingerMappingScheme).optional(),
    [Finger.RIGHT_MIDDLE]: z.enum(keyIdsForFingerMappingScheme).optional(),
    [Finger.RIGHT_RING]: z.enum(keyIdsForFingerMappingScheme).optional(),
    [Finger.RIGHT_PINKIE]: z.enum(keyIdsForFingerMappingScheme).optional(),
  })
  .refine(
    (data) => {
      const values = Object.values(data).filter((value) => value !== undefined);
      const uniqueValues = new Set(values);
      return values.length === uniqueValues.size;
    },
    {
      message: 'Values must be unique',
    }
  );

export const KeyFingerMappingSchema = z.record(z.enum(keyIdsForFingerMappingScheme), z.nativeEnum(Finger));
