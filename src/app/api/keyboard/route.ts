import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import dbConnect from '@/shared/config/mongodb/dbConnect';
import { SaveKeyboardSettingsRequest } from '@/widgets/initial-keyboard-setup/api';
import { SaveKeyboardSettingsRequestSchema } from '@/widgets/initial-keyboard-setup/model';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { user, session } = await validateRequest();

    if (!session) {
      return new Response('Unauthorized', { status: 401 });
    }
    const body = (await req.json()) as SaveKeyboardSettingsRequest;

    const validation = SaveKeyboardSettingsRequestSchema.safeParse(body);
    if (!validation.success) {
      return new Response('Invalid data', { status: 400 });
    }

    // найти клавиатуру с такими же настройками и если такая существуют сохранить id документа в профиль пользователя

    const userId = user.id;
    console.log({ userId }, { body });
    // const result = await UserModel.findOneAndUpdate({ _id: userId }, { keyboardSettings: { ids: '' } });

    // if (!result) {
    //   return new Response('User not found', { status: 404 });
    // }

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
