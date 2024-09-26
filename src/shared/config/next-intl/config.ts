export const locales = ['ru', 'en'] as const;

export type Locale = (typeof locales)[number];

export const localePrefix = 'as-needed';

export const testPathnameRegex = (pages: string[], pathName: string): boolean => {
  return RegExp(
    `^(/(${locales.join('|')}))?(${pages.flatMap((p) => (p === '/' ? ['', '/'] : p)).join('|')})/?$`,
    'i'
  ).test(pathName);
};
