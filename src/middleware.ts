import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

import { verifyRequestOrigin } from 'lucia';

import { localePrefix, locales } from '@/shared/config/next-intl/config';

export const intlMiddleware = createMiddleware({
  defaultLocale: 'ru',
  locales,
  localePrefix,
});

export async function middleware(request: NextRequest): Promise<NextResponse> {
  if (request.method === 'GET') {
    return intlMiddleware(request);
  }
  const originHeader = request.headers.get('Origin');
  // NOTE: You may need to use `X-Forwarded-Host` instead
  const hostHeader = request.headers.get('Host');
  if (!originHeader || !hostHeader || !verifyRequestOrigin(originHeader, [hostHeader])) {
    return new NextResponse(null, {
      status: 403,
    });
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Match all pathnames within `/users`, optionally with a locale prefix
    // '/(.+)?/users/(.+)',
  ],
};

export default middleware;
