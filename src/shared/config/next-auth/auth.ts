import { AuthOptions } from 'next-auth';
import type { Adapter } from 'next-auth/adapters';
import GithubProvider, {
  GithubEmail,
  GithubProfile,
} from 'next-auth/providers/github';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';

import { MongoDBAdapter } from '@auth/mongodb-adapter';

import { UserRole } from '@/entities/user';

import clientPromise from '../mongodb';

const auth: AuthOptions = {
  // TODO: убрать, когда auth будет стабильна и использовать ее: as Adapter т.к. import { MongoDBAdapter } from '@auth/mongodb-adapter'; из @auth, а не из next-auth
  adapter: MongoDBAdapter(clientPromise) as Adapter,
  session: {
    // TODO: поменять на 'database': https://github.com/nextauthjs/next-auth/issues/8161#issuecomment-1705910841
    strategy: 'jwt',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      async profile(profile: GithubProfile, tokens) {
        const res = await fetch('https://api.github.com/user/emails', {
          headers: { Authorization: `token ${tokens.access_token}` },
        });

        const emails: GithubEmail[] = await res.json();

        const primaryEmail = emails.find(
          (email) => email.primary && email.verified
        );
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
    GoogleProvider({
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
  debug: process.env.NODE_ENV === 'development',
};

export default auth;
