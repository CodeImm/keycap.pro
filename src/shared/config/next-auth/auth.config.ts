import type { NextAuthConfig } from 'next-auth';
import GitHub, { GitHubEmail, GitHubProfile } from 'next-auth/providers/github';
import Google, { GoogleProfile } from 'next-auth/providers/google';

import { Role } from '@/entities/user';
import { paths } from '@/shared/routing';

const fetchGitHubEmails = async (accessToken: string): Promise<GitHubEmail[]> => {
  const res = await fetch('https://api.github.com/user/emails', {
    headers: { Authorization: `token ${accessToken}` },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch GitHub user emails');
  }

  return res.json();
};

const getPrimaryEmail = (emails: GitHubEmail[]): GitHubEmail | undefined => {
  return emails.find((email) => email.primary && email.verified);
};

export default {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      async profile(profile: GitHubProfile, tokens) {
        if (!tokens.access_token) {
          throw new Error('No access token available');
        }

        const emails = await fetchGitHubEmails(tokens.access_token);
        const primaryEmail = getPrimaryEmail(emails);

        return {
          id: profile.id.toString(),
          email: primaryEmail?.email ?? emails[0]?.email,
          emailVerified: null,
          firstName: profile.name,
          lastName: null,
          imageURL: profile.avatar_url,
          role: Role.User,
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
          emailVerified: null,
          firstName: profile.given_name,
          lastName: profile.family_name,
          imageURL: profile.picture,
          role: Role.User,
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
    signIn: paths.signin,
    newUser: paths.signup,
  },
  debug: process.env.NODE_ENV === 'development',
} satisfies NextAuthConfig;
