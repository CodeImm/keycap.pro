import { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { MongoDBAdapter } from '@auth/mongodb-adapter';

import clientPromise from '../mongodb';

const auth: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: {
    // TODO: поменять на 'database': https://github.com/nextauthjs/next-auth/issues/8161#issuecomment-1705910841
    strategy: 'jwt',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
};

export default auth;
