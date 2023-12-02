import createMiddleware from 'next-intl/middleware';

import { localePrefix, locales } from '@/shared/config/next-intl/config';

export default createMiddleware({
  defaultLocale: 'ru',
  locales,
  localePrefix,
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Match all pathnames within `/users`, optionally with a locale prefix
    '/(.+)?/users/(.+)',
  ],
};
