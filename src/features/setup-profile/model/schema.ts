import { z } from 'zod';

import { Gender } from '@/entities/user';
import dayjs from '@/shared/config/dayjs';

import { DateSchema } from './dateSchema';
import { UsernameSchema } from './usernameSchema';

const GenderSchema = z.nativeEnum(Gender);

export const CompleteRegistrationFormSchema = z.object({
  email: z.string().email(),
  firstName: z.string().max(50).optional(),
  lastName: z.string().max(50).optional(),
  dateOfBirth: DateSchema,
  gender: GenderSchema,
  username: UsernameSchema,
  timeZone: z.string(),
});

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
