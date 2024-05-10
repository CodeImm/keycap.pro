import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { auth } from '@/shared/config/next-auth/auth';
import { locales } from '@/shared/config/next-intl/config';

type Props = {
  params: { locale: string };
};

export default async function HomePage({ params: { locale } }: Props) {
  const session = await auth();
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations('Home');

  return (
    <>
      {t('title')} {session ? session.user?.name : 'No'}
    </>
  );
}
