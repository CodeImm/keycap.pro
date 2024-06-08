import UserModel from '@/entities/user/model/User';
import dbConnect from '@/shared/config/mongodb/dbConnect';
import { auth } from '@/shared/config/next-auth/auth';

export async function PATCH(req: Request) {
  await dbConnect();
  try {
    const session = await auth();

    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 });
    }
    const body = await req.json();

    const userId = session.user.id;

    const result = await UserModel.findOneAndUpdate({ _id: userId }, { keyboardSettings: body });

    if (!result) {
      return new Response('User not found', { status: 404 });
    }

    return Response.json({ success: true, message: 'Профиль пользователя успешно обновлен', data: body });
  } catch (error) {
    console.log(error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
