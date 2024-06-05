import { CompleteRegistrationForm } from '@/features/complete-registration';
import { fetchTimeZones } from '@/shared/api/timeZones';
import { auth } from '@/shared/config/next-auth/auth';

async function getTimeZonesData() {
  const res = await fetchTimeZones();

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function AuthCompletePage() {
  const session = await auth();

  const timeZones = await getTimeZonesData();

  if (session) {
    console.log({ session });
  }

  return (
    <>
      Complete Registration Page
      <CompleteRegistrationForm timeZones={timeZones?.data ?? []} />
    </>
  );
}
