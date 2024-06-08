import { LoginForm } from '@/features/log-in';
import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import { redirect } from '@/shared/navigation';
import { paths } from '@/shared/routing';

export default async function LoginPage() {
  const { session } = await validateRequest();

  if (session) {
    redirect(paths.exercises);
  }

  return (
    <>
      <LoginForm />
    </>
  );
}
