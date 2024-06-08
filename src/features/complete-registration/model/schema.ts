import { z } from 'zod';

import { Gender } from '@/entities/user';

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
  locale: z.string(),
  timeZone: z.string(),
});
