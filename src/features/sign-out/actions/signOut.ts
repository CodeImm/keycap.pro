'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { lucia } from '@/shared/config/lucia-auth/auth';
import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import { paths } from '@/shared/routing';

export async function signOut() {
  const { session } = await validateRequest();

  if (!session) {
    return {
      error: 'Unauthorized',
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  return redirect(paths.auth.login);
}
