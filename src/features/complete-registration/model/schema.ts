import { z } from 'zod';

import { DateSchema } from './dateSchema';

export const CompleteRegistrationFormSchema = z.object({
  email: z.string().email(),
  firstName: z.string().max(50).optional(),
  lastName: z.string().max(50).optional(),
  dateOfBirth: DateSchema,
  gender: z.string(),
  username: z.string(),
  locale: z.string(),
  timeZone: z.string(),
});
