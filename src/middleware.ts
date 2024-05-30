import NextAuth from 'next-auth';
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

import { localePrefix, locales, testPathnameRegex } from '@/shared/config/next-intl/config';

import authConfig from './shared/config/next-auth/auth.config';
import { authPages, paths, protectedPages, publicPages } from './shared/routing';

export const { auth } = NextAuth(authConfig);

export const intlMiddleware = createMiddleware({
  defaultLocale: 'ru',
  locales,
  localePrefix,
});

const authMiddleware = auth((req) => {
  const isAuthPage = testPathnameRegex(authPages, req.nextUrl.pathname);
  const isProtectedPage = testPathnameRegex(protectedPages, req.nextUrl.pathname);
  const isAuthCompletePage = testPathnameRegex([paths.complete], req.nextUrl.pathname);
  const session = req.auth;

  if (!session && isAuthCompletePage) {
    return NextResponse.redirect(new URL(paths.signin, req.nextUrl));
  }

  if (session && session.user.registrationCompleted === null && !isAuthCompletePage && isProtectedPage) {
    return NextResponse.redirect(new URL(paths.complete, req.nextUrl));
  } else if (session && isAuthPage && !isAuthCompletePage) {
    return NextResponse.redirect(new URL(paths.home, req.nextUrl));
  }

  if (!session && !isAuthPage) {
    return NextResponse.redirect(new URL(paths.signin, req.nextUrl));
  }

  return intlMiddleware(req);
});

const middleware = (req: NextRequest) => {
  const isPublicPage = testPathnameRegex(publicPages, req.nextUrl.pathname);
  const isAuthPage = testPathnameRegex(authPages, req.nextUrl.pathname);

  if (isAuthPage || !isPublicPage) {
    return authMiddleware(req, {});
  }

  return intlMiddleware(req);
};

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
