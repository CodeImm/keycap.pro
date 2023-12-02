import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default function ExercisesPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Exercises');

  return <>{t('title')}</>;
}
