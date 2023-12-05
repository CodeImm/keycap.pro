import { getServerSession } from 'next-auth';

import { LoginForm } from '@/features/log-in';
import auth from '@/shared/config/next-auth/auth';
import { redirect } from '@/shared/navigation';
import { paths } from '@/shared/routing';

export default async function LoginPage() {
  const session = await getServerSession(auth);

  if (session) {
    redirect(paths.exercises);
  }

  return (
    <>
      <LoginForm />
    </>
  );
}
