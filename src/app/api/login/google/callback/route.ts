import { cookies } from 'next/headers';

import { OAuth2RequestError, generateCodeVerifier } from 'arctic';

import { Role } from '@/entities/user';
import UserModel from '@/entities/user/model/User';
import { google, lucia } from '@/shared/config/lucia-auth/auth';
import dbConnect from '@/shared/config/mongodb/dbConnect';

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const storedState = cookies().get('google_oauth_state')?.value ?? null;
  if (!code || !state || !storedState || state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const codeVerifier = generateCodeVerifier();
    const tokens = await google.validateAuthorizationCode(code, codeVerifier);
    const googleUserResponse = await fetch('https://openidconnect.googleapis.com/v1/userinfo', {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });

    const profile: GoogleProfile = await googleUserResponse.json();

    await dbConnect();

    const existingUser = await UserModel.findOne({ google_id: profile.sub });

    if (existingUser) {
      const session = await lucia.createSession(existingUser._id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
      return new Response(null, {
        status: 302,
        headers: {
          Location: '/',
        },
      });
    }

    const newUser = await UserModel.create({
      google_id: profile.sub,
      // username: profile.login,
      ///
      email: profile.email,
      emailVerified: null,
      firstName: profile.given_name,
      lastName: profile.family_name,
      registrationCompleted: null,
      imageURL: profile.picture,
      role: Role.User,
    });
    const userId = newUser._id;

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/',
      },
    });
  } catch (e) {
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
}

export interface GoogleProfile extends Record<string, any> {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name?: string;
  given_name: string;
  hd?: string;
  iat: number;
  iss: string;
  jti?: string;
  locale?: string;
  name: string;
  nbf?: number;
  picture: string;
  sub: string;
}
