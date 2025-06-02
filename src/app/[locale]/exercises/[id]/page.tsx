import { notFound } from 'next/navigation';

import { Box, Paper, Typography } from '@mui/material';

import { restoreCharactersFromKeyInputs } from '@/entities/exercise';
import ExerciseSetExerciseModel from '@/entities/exercise/model/ExerciseSetExercise';
import { DEFAULT_FINGER_COLOR_MAPPING } from '@/entities/keyFingerMapping';
import { System } from '@/entities/keyboard';
import UserKeyboardProfileModel from '@/entities/userKeyboardProfile/model/UserKeyboardProfileModel';
import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import dbConnect from '@/shared/config/mongodb/dbConnect';
import { BasicTypingExercise } from '@/widgets/basic-typing-exercise';

type Props = {
  params: { id: string };
};

interface ExerciseResponse {
  success: boolean;
  data?: any; // Замените на интерфейс IExercise, если есть
  message?: string;
}

export async function getExercise(id: string): Promise<ExerciseResponse> {
  try {
    // Подключаемся к базе данных
    await dbConnect();

    // Проверяем авторизацию пользователя
    const { user, session } = await validateRequest();
    if (!session || !user) {
      return { success: false, message: 'Unauthorized' };
    }

    const userKeyboardProfile = await UserKeyboardProfileModel.findOne({
      _id: user.keyboardSettings.activeUserKeyboardProfile._id,
    })
      .populate('currentExerciseSet')
      .populate({
        path: 'keyboardProfile',
        populate: [{ path: 'geometry' }, { path: 'layout' }, { path: 'keyFingerMappingScheme' }],
      });

    const exerciseSetExercise = await ExerciseSetExerciseModel.findOne({
      exerciseSet: userKeyboardProfile?.currentExerciseSet._id,
      exercise: id,
    }).populate('exercise');

    console.log({ userKeyboardProfile, exerciseSetExercise });
    // Проверяем, найдена ли запись
    if (!userKeyboardProfile || !exerciseSetExercise) {
      return { success: false, message: 'Not found' };
    }

    // Возвращаем упражнение
    return { success: true, data: { userKeyboardProfile, exerciseSetExercise } };
  } catch (error) {
    console.error('Error fetching exercise:', error);
    return { success: false, message: 'Internal server error' };
  }
}

export default async function ExercisePage({ params }: Props) {
  let response = null;

  try {
    response = await getExercise(params.id);
  } catch (error) {
    // Можно логировать или обрабатывать ошибку
    notFound();
  }

  if (!response) {
    notFound();
  }
  console.log({ response });

  const {
    userKeyboardProfile: {
      keyboardProfile: { layout, geometry, keyFingerMappingScheme, homeRow },
    },
  } = response.data;

  const exerciseText = restoreCharactersFromKeyInputs(
    response.data.exerciseSetExercise.exercise.keyInputs,
    response.data.userKeyboardProfile.keyboardProfile.layout.layoutMap
  );

  return (
    <Box p={4}>
      <Paper variant="outlined" sx={{ p: 3, mt: 2 }}>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          Упражнение {response.data?.exerciseSetExercise?.order + 1} | {response.data.exerciseSetExercise.exercise.type}
        </Typography>

        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {exerciseText}
        </Typography>
      </Paper>

      <Paper variant="outlined" sx={{ p: 3, mt: 3 }}>
        <BasicTypingExercise
          system={System.Windows}
          layout={layout.layoutMap}
          keyboardFormat={geometry.format}
          keyFingerMapping={keyFingerMappingScheme.keyFingerMappingScheme}
          fingerColorMapping={DEFAULT_FINGER_COLOR_MAPPING}
          homeRow={[homeRow[3], homeRow[6]]}
        />
      </Paper>

      <Paper variant="outlined" sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Debug JSON:
        </Typography>
        <pre>{JSON.stringify(response, null, 2)}</pre>
      </Paper>
    </Box>
  );
}
