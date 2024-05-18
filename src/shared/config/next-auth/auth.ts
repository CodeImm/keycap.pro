import NextAuth from 'next-auth';
import type { Adapter } from 'next-auth/adapters';

import { MongoDBAdapter } from '@auth/mongodb-adapter';

import authConfig from './auth.config';

import clientPromise from '../mongodb';

export const { auth, handlers, signIn, signOut } = NextAuth({
  // TODO: убрать, когда auth будет стабильна и использовать ее: as Adapter т.к. import { MongoDBAdapter } from '@auth/mongodb-adapter'; из @auth, а не из next-auth
  adapter: MongoDBAdapter(clientPromise) as Adapter,
  session: {
    // TODO: поменять на 'database': https://github.com/nextauthjs/next-auth/issues/8161#issuecomment-1705910841
    strategy: 'jwt',
  },
  ...authConfig,
});
