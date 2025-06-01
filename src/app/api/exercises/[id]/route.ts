import ExerciseModel from '@/entities/exercise/model/Exercise';
import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import dbConnect from '@/shared/config/mongodb/dbConnect';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect();

    const { user, session } = await validateRequest();
    if (!session || !user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Ищем упражнение по id
    const exercise = await ExerciseModel.findOne({ id: params.id });

    // Проверяем, найдено ли упражнение
    if (!exercise) {
      return Response.json({ success: false, message: 'Not found' }, { status: 404 });
    }

    // Возвращаем упражнение
    return Response.json({ success: true, data: exercise });
  } catch (error) {
    console.error('Error fetching exercise:', error);
    return Response.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
