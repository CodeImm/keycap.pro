import NextAuth from 'next-auth';

import auth from '@/shared/config/next-auth/auth';

const handler = NextAuth(auth);

export { handler as GET, handler as POST };
