import UserModel from '@/entities/user/model/User';
import { UpdateUserProfileRequest } from '@/features/complete-registration/api';
import { CompleteRegistrationFormRequestSchema } from '@/features/complete-registration/model/schema';
import dayjs from '@/shared/config/dayjs';
import dbConnect from '@/shared/config/mongodb/dbConnect';
import { auth } from '@/shared/config/next-auth/auth';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const session = await auth();

    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 });
    }
    const body = (await req.json()) as UpdateUserProfileRequest;

    if (!CompleteRegistrationFormRequestSchema.safeParse(body).success) {
      return new Response('Invalid data', { status: 404 });
    }

    const user = await UserModel.findOne({ username: body.username });

    if (user) {
      return new Response(JSON.stringify({ isUnique: false }), { status: 200 });
    }

    const userId = session.user.id;
    console.log({ userId });
    const result = await UserModel.findOneAndUpdate(
      { _id: userId },
      { ...body, dateOfBirth: dayjs.utc(body.dateOfBirth), registrationCompleted: dayjs.utc() }
    );

    if (!result) {
      return new Response('User not found', { status: 404 });
    }

    return Response.json({ success: true, message: 'Профиль пользователя успешно обновлен', data: body });
  } catch (error) {
    console.log(error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
