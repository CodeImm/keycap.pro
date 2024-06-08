import UserModel from '@/entities/user/model/User';
import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import dbConnect from '@/shared/config/mongodb/dbConnect';

export async function GET(_req: Request, { params }: { params: { username: string } }) {
  const username = params.username;

  if (!username) {
    return new Response('Username is required', { status: 400 });
  }

  try {
    await dbConnect();
    const { session } = await validateRequest();

    if (!session) {
      return new Response('Unauthorized', { status: 401 });
    }

    const user = await UserModel.findOne({ username });

    if (user) {
      return new Response(JSON.stringify({ isUnique: false }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ isUnique: true }), { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
