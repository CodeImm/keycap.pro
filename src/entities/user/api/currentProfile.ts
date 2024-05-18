// import { auth } from '@/shared/config/next-auth/auth';

// export async function currentProfile() {
//   const session = auth();

//   if (!session.user) {
//     return null;
//   }

//   const client = await clientPromise;
//   const db = client.db('keycap');

//   const profile = db.users.findUnique({
//     where: {
//       userId,
//     },
//   });

//   return profile;
// }
