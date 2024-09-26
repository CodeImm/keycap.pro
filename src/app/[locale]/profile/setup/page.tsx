import { SetupProfileForm } from '@/features/setup-profile';
import { fetchTimeZones } from '@/shared/api/timeZones';
import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import { redirect } from '@/shared/navigation';
import { paths } from '@/shared/routing';

interface TimeZonesResponse {
  data: Array<{ timeZone: string; timeZoneName: string }>;
}

async function getTimeZonesData(): Promise<TimeZonesResponse> {
  const res = await fetchTimeZones();

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ProfileSetupPage() {
  const { session, user } = await validateRequest();

  if (!session) {
    redirect(paths.auth.login);
  }

  if (user?.registrationCompleted) {
    redirect(paths.exercises);
  }

  const timeZones = await getTimeZonesData();

  return (
    <>
      Profile Setup Page
      <SetupProfileForm timeZones={timeZones?.data ?? []} />
    </>
  );
}
