import { z } from 'zod';

export const UsernameSchema = z
  .string()
  .min(5)
  .max(32)
  .regex(/^(?!_)(?!.*__.*)(?!.*_$)[a-zA-Z0-9_]{5,32}$/, { message: 'This username is invalid' });
