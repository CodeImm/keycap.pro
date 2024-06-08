import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { lucia } from '@/shared/config/lucia-auth/auth';
import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';

interface Callback {
  onClick(): void;
}

type Props = { children({ onClick }: Callback): JSX.Element };

export const SignOut = ({ children }: Props) => {
  return (
    <>
      {children({
        onClick: logout,
      })}
    </>
  );
};

async function logout(): Promise<ActionResult> {
  'use server';
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: 'Unauthorized',
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect('/login');
}

interface ActionResult {
  error: string | null;
}
