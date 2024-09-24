import { CompleteRegistrationForm } from '@/features/complete-registration';
import { fetchTimeZones } from '@/shared/api/timeZones';
import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';

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
  const { session } = await validateRequest();

  if (session) {
    console.log({ session });
  }

  const timeZones = await getTimeZonesData();

  return (
    <>
      Profile Setup Page
      <CompleteRegistrationForm timeZones={timeZones?.data ?? []} />
    </>
  );
}
