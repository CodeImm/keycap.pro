import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import { redirect } from '@/shared/navigation';
import { paths } from '@/shared/routing';

export default async function SignUpPage() {
  const { session } = await validateRequest();
  
  if (session) {
    redirect(paths.exercises);
  }

  return <>Sign Up Page</>;
}
