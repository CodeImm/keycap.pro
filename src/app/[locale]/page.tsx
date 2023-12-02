import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { locales } from '@/shared/config/next-intl/config';

type Props = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('Home');

  return <>{t('title')}</>;
}
