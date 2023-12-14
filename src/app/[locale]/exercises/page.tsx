import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { Container } from '@mui/material';

import { InitialKeyboardSetup } from '@/widgets/initial-keyboard-setup';

type Props = {
  params: { locale: string };
};

export default function ExercisesPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Exercises');

  return (
    <Container maxWidth="md">
      <InitialKeyboardSetup />
    </Container>
  );
}
