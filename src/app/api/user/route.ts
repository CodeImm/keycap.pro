import UserModel from '@/entities/user/model/User';
import { UpdateUserProfileRequest } from '@/features/setup-profile/api';
import { SetupProfileFormRequestSchema } from '@/features/setup-profile/model/schema';
import dayjs from '@/shared/config/dayjs';
import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import dbConnect from '@/shared/config/mongodb/dbConnect';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { user, session } = await validateRequest();

    if (!session) {
      return new Response('Unauthorized', { status: 401 });
    }
    const body = (await req.json()) as UpdateUserProfileRequest;

    const validation = SetupProfileFormRequestSchema.safeParse(body);
    if (!validation.success) {
      return new Response('Invalid data', { status: 400 });
    }

    const foundUser = await UserModel.findOne({ username: body.username });

    if (foundUser) {
      return new Response(JSON.stringify({ isUnique: false }), { status: 200 });
    }

    const userId = user.id;
    console.log({ userId });
    const result = await UserModel.findOneAndUpdate(
      { _id: userId },
      { ...body, dateOfBirth: dayjs.utc(body.dateOfBirth), registrationCompleted: dayjs.utc() }
    );

    if (!result) {
      return new Response('User not found', { status: 404 });
    }
    // unstable_update({ user: result });
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Профиль пользователя успешно обновлен',
        data: result,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    await dbConnect();
    const { user } = await validateRequest();

    if (!user) {
      return new Response('Unauthorized', { status: 401 });
    }
    const body = await req.json();

    const userId = user.id;

    const result = await UserModel.findOneAndUpdate({ _id: userId }, { keyboardSettings: body });

    if (!result) {
      return new Response('User not found', { status: 404 });
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Профиль пользователя успешно обновлен',
        data: body,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
