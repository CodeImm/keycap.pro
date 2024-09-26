import { Locale, locales } from '../config/next-intl/config';

export const isValidLocale = (locale: string): locale is Locale => locales.includes(locale as Locale);
