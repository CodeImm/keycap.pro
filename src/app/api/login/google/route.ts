import { cookies } from 'next/headers';

import { generateCodeVerifier, generateState } from 'arctic';

import { google } from '@/shared/config/lucia-auth/auth';

export async function GET(): Promise<Response> {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = await google.createAuthorizationURL(state, codeVerifier, {
    scopes: ['profile', 'email'], // "openid" always included
  });

  cookies().set('google_oauth_state', state, {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: 'lax',
  });

  return Response.redirect(url);
}
