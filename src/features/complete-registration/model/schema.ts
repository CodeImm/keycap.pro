import { z } from 'zod';

import { DateSchema } from './dateSchema';

export const CompleteRegistrationFormSchema = z.object({
  email: z.string().email(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  dateOfBirth: DateSchema,
  gender: z.string(),
  username: z.string(),
  locale: z.string(),
  timeZone: z.string(),
});
