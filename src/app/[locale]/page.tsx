import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import { isValidLocale } from '@/shared/lib';
import { redirect } from '@/shared/navigation';
import { paths } from '@/shared/routing';

type Props = {
  params: { locale: string };
};

export default async function HomePage({ params: { locale } }: Props) {
  const { user } = await validateRequest();

  // Validate that the incoming `locale` parameter is valid
  if (!isValidLocale(locale)) {
    notFound();
  }

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations('Home');

  if (!user) {
    redirect(paths.auth.login);
  }

  return (
    <>
      {t('title')} {user ? user.id.toString() : 'No'}
    </>
  );
}
