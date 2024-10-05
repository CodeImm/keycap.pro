import dayjs from 'dayjs';
import { z } from 'zod';

import { Gender } from '..';

export const GenderSchema = z.nativeEnum(Gender);

export const UsernameSchema = z
  .string()
  .min(5)
  .max(32)
  .regex(/^(?!_)(?!.*__.*)(?!.*_$)[a-zA-Z0-9_]{5,32}$/, { message: 'This username is invalid' });

export const CompleteRegistrationFormRequestSchema = z.object({
  email: z.string().email(),
  firstName: z.string().max(50).optional(),
  lastName: z.string().max(50).optional(),
  dateOfBirth: z.string().refine((date) => {
    return dayjs(date).isBefore(dayjs());
  }),
  gender: GenderSchema,
  username: UsernameSchema,
  timeZone: z.string(),
});
