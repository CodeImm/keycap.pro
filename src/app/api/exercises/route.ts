import ExerciseSetExerciseModel from '@/entities/exercise/model/ExerciseSetExercise';
import { KeyboardProfile } from '@/entities/keyboard/model/KeyboardProfile';
import UserModel from '@/entities/user/model/User';
import UserKeyboardProfileModel from '@/entities/userKeyboardProfile/model/UserKeyboardProfileModel';
import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import dbConnect from '@/shared/config/mongodb/dbConnect';

// API response interface
interface ApiResponse {
  success?: boolean;
  message?: string;
  data?: {
    exerciseSet: {
      _id: string;
      keyboardProfile: string;
      createdAt?: string;
      updatedAt?: string;
    };
    keyboardProfile: KeyboardProfile;
    exercises: {
      id: string;
      slug: string;
      geometry: string;
      homeRow: string[];
      keyInputs: any[]; // Adjust based on KeyInput structure
      keyFingerMapping: any; // Adjust based on actual structure
      type: string; // ExerciseType enum
      hash: string;
      difficulty?: number;
      createdAt?: string;
      updatedAt?: string;
      order: number;
    }[];
  };
  error?: string;
}

/**
 * GET request to retrieve exercises for the user's active keyboard profile
 * @returns JSON response with the exercise set and associated exercises
 */
export async function GET(): Promise<Response> {
  try {
    await dbConnect();

    const { user, session } = await validateRequest();
    if (!session || !user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userData = await UserModel.findById(user.id).select('keyboardSettings.activeUserKeyboardProfile');
    const activeProfileId = userData?.keyboardSettings?.activeUserKeyboardProfile;

    if (!activeProfileId) {
      return Response.json({ error: 'No active keyboard profile found' }, { status: 404 });
    }

    const userKeyboardProfile = await UserKeyboardProfileModel.findById(activeProfileId)
      .populate('currentExerciseSet')
      .populate({
        path: 'keyboardProfile',
        populate: [{ path: 'geometry' }, { path: 'layout' }, { path: 'keyFingerMappingScheme' }],
      });

    if (!userKeyboardProfile || !userKeyboardProfile.currentExerciseSet) {
      return Response.json({ error: 'Exercise set not found' }, { status: 404 });
    }

    const exerciseSetExercises = await ExerciseSetExerciseModel.find({
      exerciseSet: userKeyboardProfile.currentExerciseSet._id,
    })
      .populate('exercise')
      .sort({ order: 1 });

    const keyboardProfile = userKeyboardProfile.keyboardProfile;

    const response: ApiResponse = {
      success: true,
      message: 'Упражнения успешно получены',
      data: {
        exerciseSet: {
          _id: userKeyboardProfile.currentExerciseSet._id.toString(),
          keyboardProfile: userKeyboardProfile._id.toString(),
          createdAt: userKeyboardProfile.currentExerciseSet.createdAt?.toISOString(),
          updatedAt: userKeyboardProfile.currentExerciseSet.updatedAt?.toISOString(),
        },
        keyboardProfile: keyboardProfile,
        exercises: exerciseSetExercises.map((item) => {
          const exercise = item.exercise as any;
          return {
            id: exercise._id.toString(),
            keyInputs: exercise.keyInputs,
            keyFingerMapping: exercise.keyFingerMapping,
            type: exercise.type,
            hash: exercise.hash,
            difficulty: exercise.difficulty,
            createdAt: exercise.createdAt?.toISOString(),
            updatedAt: exercise.updatedAt?.toISOString(),
            order: item.order,
          };
        }),
      },
    };

    return Response.json(response, { status: 200 });
  } catch (error) {
    console.error('Error in GET /exercises:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
