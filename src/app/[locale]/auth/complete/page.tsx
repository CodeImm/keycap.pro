import { CompleteRegistrationForm } from '@/features/complete-registration';
import { auth } from '@/shared/config/next-auth/auth';

export default async function AuthCompletePage() {
  const session = await auth();

  if (session) {
    console.log({ session });
  }

  return (
    <>
      Complete Registration Page
      <CompleteRegistrationForm />
    </>
  );
}
