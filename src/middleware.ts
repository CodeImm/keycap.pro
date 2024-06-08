import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

import { verifyRequestOrigin } from 'lucia';

import { localePrefix, locales } from '@/shared/config/next-intl/config';

// import { validateRequest } from './shared/config/lucia-auth/validateRequest';

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

// const authMiddleware = async (req: NextRequest) => {
//   // const isAuthPage = testPathnameRegex(authPages, req.nextUrl.pathname);
//   // const isProtectedPage = testPathnameRegex(protectedPages, req.nextUrl.pathname);
//   // const isAuthCompletePage = testPathnameRegex([paths.complete], req.nextUrl.pathname);
//   // // await dbConnect();
//   // // const { user, session } = await validateRequest();

//   // // session проверкаа что истекла или нет
//   // if (!session && isAuthCompletePage) {
//   //   return NextResponse.redirect(new URL(paths.signin, req.nextUrl));
//   // }
//   // // console.log(
//   // //   user && user.registrationCompleted,
//   // //   user && user.registrationCompleted === null && !isAuthCompletePage && isProtectedPage
//   // // );
//   // if (user && user.registrationCompleted === null && !isAuthCompletePage && isProtectedPage) {
//   //   return NextResponse.redirect(new URL(paths.complete, req.nextUrl));
//   // } else if (user && isAuthPage && !isAuthCompletePage) {
//   //   return NextResponse.redirect(new URL(paths.home, req.nextUrl));
//   // }

//   // if (!user && !isAuthPage) {
//   //   return NextResponse.redirect(new URL(paths.signin, req.nextUrl));
//   // }

//   return intlMiddleware(req);
// };

// const middleware = (req: NextRequest) => {
//   // const isPublicPage = testPathnameRegex(publicPages, req.nextUrl.pathname);
//   // const isAuthPage = testPathnameRegex(authPages, req.nextUrl.pathname);

//   // if (isAuthPage || !isPublicPage) {
//   //   return authMiddleware(req, {});
//   // }

//   return intlMiddleware(req);
// };

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
