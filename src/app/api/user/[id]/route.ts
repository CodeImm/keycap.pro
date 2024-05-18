import { NextResponse } from 'next/server';

import UserModel from '@/entities/user/model/User';
import dbConnect from '@/shared/config/mongodb/dbConnect';
import { auth } from '@/shared/config/next-auth/auth';

export async function PATCH(req: Request) {
  await dbConnect();
  try {
    const session = await auth();

    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    const body = await req.json();

    const userId = session.user.id;

    const result = await UserModel.findOneAndUpdate({ _id: userId }, { keyboardSettings: body });

    if (!result) {
      return new NextResponse('User not found', { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Профиль пользователя успешно обновлен', data: body });
  } catch (error) {
    console.log(error);
    return new NextResponse('Interntal Error', { status: 500 });
  }
}
