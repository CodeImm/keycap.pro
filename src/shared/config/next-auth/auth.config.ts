import type { NextAuthConfig } from 'next-auth';
import GitHub, { GitHubEmail, GitHubProfile } from 'next-auth/providers/github';
import Google, { GoogleProfile } from 'next-auth/providers/google';

import { UserRole } from '@/entities/user';
import { paths } from '@/shared/routing';

export default {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      async profile(profile: GitHubProfile, tokens) {
        const res = await fetch('https://api.github.com/user/emails', {
          headers: { Authorization: `token ${tokens.access_token}` },
        });

        const emails: GitHubEmail[] = await res.json();

        const primaryEmail = emails.find((email) => email.primary && email.verified);
        // TODO: нужно ли "__v: 0" в записи
        return {
          id: profile.id.toString(),
          email: primaryEmail?.email ?? emails[0]?.email,
          emailVerified: false,
          name: profile.name ?? profile.login,
          imageURL: profile.avatar_url,
          role: UserRole.USER,
          createdAt: new Date(),
          updatedAt: new Date(),
          __v: 0,
        };
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          email: profile.email,
          emailVerified: false,
          name: profile.name,
          imageURL: profile.picture,
          role: UserRole.USER,
          createdAt: new Date(),
          updatedAt: new Date(),
          __v: 0,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.role = user.role;
        token.userId = user.id;
        token.imageURL = user.imageURL;
      }

      return token;
    },
    session: ({ session, token }) => {
      session.user.id = token.userId;
      session.user.imageURL = token.imageURL;
      session.user.role = token.role;

      return session;
    },
  },
  pages: {
    signIn: paths.login,
    signUp: paths.signup,
  },
  debug: process.env.NODE_ENV === 'development',
} satisfies NextAuthConfig;
