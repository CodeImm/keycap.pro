import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import { locales } from '@/shared/config/next-intl/config';
import { redirect } from '@/shared/navigation';
import { paths } from '@/shared/routing';

const isValidLocale = (locale: string): boolean => locales.includes(locale);

type Props = {
  params: { locale: string };
};

export default async function HomePage({ params: { locale } }: Props) {
  const { user } = await validateRequest();

  // Validate that the incoming `locale` parameter is valid
  if (!isValidLocale(locale)) {
    return notFound();
  }
  if (!isValidLocale) notFound();
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations('Home');

  if (!user) {
    redirect(paths.signin);
  }

  return (
    <>
      {t('title')} {user ? user.id.toString() : 'No'}
    </>
  );
}
