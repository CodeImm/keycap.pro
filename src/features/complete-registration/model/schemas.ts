import dayjs from 'dayjs';
import { z } from 'zod';

import { GenderSchema, UsernameSchema } from '@/entities/user';

const DateSchema = z
  .object({
    day: z
      .union([z.number().min(1).max(31), z.literal('')])
      .refine((val) => val !== '', { message: 'Day is required' }),
    month: z
      .union([z.number().min(0).max(11), z.literal('')])
      .refine((val) => val !== '', { message: 'Month is required' }),
    year: z
      .union([z.number().min(1900).max(dayjs().get('year')), z.literal('')])
      .refine((val) => val !== '', { message: 'Year is required' }),
  })
  .refine(
    (data) => {
      if (data.year !== '' && data.month !== '' && data.day !== '') {
        const date = dayjs.utc(`${data.year}-${data.month + 1}-${data.day}`);

        return (
          date.isValid() &&
          date.isBefore(dayjs()) &&
          data.day <= dayjs(`${data.year}-${data.month + 1}`, ['MM-YYYY', 'M-YYYY']).daysInMonth()
        );
      }
      return true;
    },
    {
      path: undefined,
      message: 'Invalid date',
    }
  );

export const CompleteRegistrationFormSchema = z.object({
  email: z.string().trim().email(),
  firstName: z.string().trim().max(50).optional(),
  lastName: z.string().trim().max(50).optional(),
  dateOfBirth: DateSchema,
  gender: GenderSchema,
  username: UsernameSchema,
  timeZone: z.string(),
});
