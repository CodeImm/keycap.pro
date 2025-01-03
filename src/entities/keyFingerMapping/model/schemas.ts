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

      const nonSpaceValues = values.filter((value) => value !== 'Space');
      const uniqueNonSpaceValues = new Set(nonSpaceValues);

      const areNonSpaceValuesUnique = nonSpaceValues.length === uniqueNonSpaceValues.size;

      const spaceValuesCount = values.length - nonSpaceValues.length;

      return areNonSpaceValuesUnique && spaceValuesCount <= 2;
    },
    {
      message: 'Values must be unique, but "Space" can be used twice.',
    }
  );

export const KeyFingerMappingSchema = z.record(z.enum(keyCodes), z.array(z.nativeEnum(Finger)));

export type HomeRow = z.infer<typeof HomeRowSchema>;
