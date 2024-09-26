import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { isValidLocale } from '@/shared/lib';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!isValidLocale(locale)) notFound();

  return {
    messages: (await import(`../../../locales/${locale}.json`)).default,
  };
});
