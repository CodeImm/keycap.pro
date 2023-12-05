import { getServerSession } from 'next-auth';

import auth from '@/shared/config/next-auth/auth';
import { redirect } from '@/shared/navigation';
import { paths } from '@/shared/routing';

export default async function SignUpPage() {
  const session = await getServerSession(auth);

  if (session) {
    redirect(paths.exercises);
  }
  return <>Sign Up Page</>;
}
