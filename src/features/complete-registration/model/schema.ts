import { z } from 'zod';

import { Gender } from '@/entities/user';

import { DateSchema } from './dateSchema';

const GenderSchema = z.nativeEnum(Gender);

export const CompleteRegistrationFormSchema = z.object({
  email: z.string().email(),
  firstName: z.string().max(50).optional(),
  lastName: z.string().max(50).optional(),
  dateOfBirth: DateSchema,
  gender: GenderSchema,
  username: z.string(),
  locale: z.string(),
  timeZone: z.string(),
});
