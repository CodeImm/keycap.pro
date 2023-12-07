import { DefaultSession } from 'next-auth';

import type { UserRole } from '@/entities/user';

declare module 'next-auth' {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    id: string;
    name: string | null;
    email: string;
    role: UserRole;
    imageURL?: string;
    createdAt: Date;
    updatedAt: Date;
  }

  interface JWT {
    id: string;
    name: string | null;
    email: string;
    role: UserRole;
    imageURL?: string;
  }

  interface Session extends DefaultSession {
    user: Partial<User>;
  }
}
