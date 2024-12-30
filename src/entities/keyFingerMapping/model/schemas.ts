import { z } from 'zod';

import { Finger, keyCodes } from '@/shared/types';

export const HomeRowSchema = z
  .object({
    [Finger.LEFT_PINKIE]: z.enum(keyCodes).optional(),
    [Finger.LEFT_RING]: z.enum(keyCodes).optional(),
    [Finger.LEFT_MIDDLE]: z.enum(keyCodes).optional(),
    [Finger.LEFT_INDEX]: z.enum(keyCodes).optional(),
    [Finger.LEFT_THUMB]: z.enum(keyCodes).optional(),
    [Finger.RIGHT_THUMB]: z.enum(keyCodes).optional(),
    [Finger.RIGHT_INDEX]: z.enum(keyCodes).optional(),
    [Finger.RIGHT_MIDDLE]: z.enum(keyCodes).optional(),
    [Finger.RIGHT_RING]: z.enum(keyCodes).optional(),
    [Finger.RIGHT_PINKIE]: z.enum(keyCodes).optional(),
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

export const KeyFingerMappingSchema = z.record(z.enum(keyCodes), z.nativeEnum(Finger));

export type HomeRow = z.infer<typeof HomeRowSchema>;
