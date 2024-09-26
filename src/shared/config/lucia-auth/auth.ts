import { GitHub, Google } from 'arctic';
import { Lucia } from 'lucia';
import { Types } from 'mongoose';

import { adapter } from './adapter';

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    // this sets cookies with super long expiration
    // since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
    expires: false,
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === 'production',
    },
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      githubId: attributes.github_id,
      googleId: attributes.google_id,
      firstName: attributes.firstName,
      lastName: attributes.lastName,
      email: attributes.email,
      emailVerified: attributes.emailVerified,
      registrationCompleted: attributes.registrationCompleted,
      role: attributes.role,
      imageURL: attributes.imageURL,
      createdAt: attributes.createdAt,
      updatedAt: attributes.updatedAt,
    };
  },
});

// IMPORTANT!
declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
    UserId: Types.ObjectId;
  }
}

//, redirectURI
export const github = new GitHub(process.env.GITHUB_CLIENT_ID!, process.env.GITHUB_CLIENT_SECRET!);

const redirectURI = 'http://localhost:3000/';
export const google = new Google(process.env.GOOGLE_CLIENT_ID!, process.env.GOOGLE_CLIENT_SECRET!, redirectURI);

interface DatabaseUserAttributes {
  id: string;
  github_id?: number;
  google_id?: number;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  emailVerified: Date | null;
  registrationCompleted: Date | null;
  role: string;
  imageURL?: string;
  createdAt: Date;
  updatedAt: Date;
}
