import { unstable_setRequestLocale } from 'next-intl/server';

import { Container } from '@mui/material';

import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import { redirect } from '@/shared/navigation';
import { paths } from '@/shared/routing';
import { ExerciseList } from '@/widgets/exercise-list';
import { InitialKeyboardSetup } from '@/widgets/initial-keyboard-setup';

type Props = {
  params: { locale: string };
};

export default async function ExercisesPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const { user } = await validateRequest();

  if (user && !user.registrationCompleted) {
    redirect(paths.profile.setup);
  }
  console.log(JSON.stringify(user));
  return (
    <Container maxWidth="md">
      {user?.keyboardSettings?.activeUserKeyboardProfile ? <ExerciseList /> : <InitialKeyboardSetup />}
    </Container>
  );
}
