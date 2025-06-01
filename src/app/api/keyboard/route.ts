import { Types } from 'mongoose';

import ExerciseSetModel from '@/entities/exercise/model/ExercixeSet';
// Исправлено: 'ExercixeSet' -> 'ExerciseSet'
import KeyFingerMappingSchemeModel from '@/entities/keyFingerMapping/model/KeyFingerMappingScheme';
import { FormFactor, SaveKeyboardSettingsRequest } from '@/entities/keyboard';
import KeyboardGeometryModel from '@/entities/keyboard/model/KeyboardGeometry';
import KeyboardLayoutModel from '@/entities/keyboard/model/KeyboardLayout';
import KeyboardProfileModel from '@/entities/keyboard/model/KeyboardProfile';
import { SaveKeyboardSettingsRequestSchema } from '@/entities/keyboard/model/schemas';
import UserModel from '@/entities/user/model/User';
import UserKeyboardProfileModel from '@/entities/userKeyboardProfile/model/UserKeyboardProfileModel';
import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import dbConnect from '@/shared/config/mongodb/dbConnect';

// Тип для ответа API
interface ApiResponse {
  success?: boolean;
  message?: string;
  data?: {
    userKeyboardProfileId?: Types.ObjectId;
    keyboardProfileId?: Types.ObjectId;
    exerciseSetId?: Types.ObjectId;
  };
  error?: string;
  details?: unknown;
}

/**
 * Handles POST request to save keyboard settings for a user
 * @param req - The incoming HTTP request
 * @returns JSON response with success status and relevant data
 */
export async function POST(req: Request): Promise<Response> {
  try {
    // Establish database connection
    await dbConnect();

    // Validate user session
    const { user, session } = await validateRequest();
    if (!session || !user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse and validate request body
    const body = (await req.json()) as SaveKeyboardSettingsRequest;
    const parsedData = SaveKeyboardSettingsRequestSchema.safeParse(body);
    if (!parsedData.success) {
      return Response.json(
        {
          error: 'Invalid input',
          details: parsedData.error.format(),
        },
        { status: 400 }
      );
    }

    const userId = user.id;

    // Generate hash for key finger mapping schema
    const hash = KeyFingerMappingSchemeModel.generateHash(body.keyFingerMappingSchema);
    let keyFingerMappingSchemeId: Types.ObjectId | undefined;

    // Check if key finger mapping scheme exists
    const existingScheme = await KeyFingerMappingSchemeModel.findOne({ hash });
    if (existingScheme) {
      keyFingerMappingSchemeId = existingScheme._id;
    } else {
      // Handle case where no existing scheme is found
      return Response.json({ error: 'Key finger mapping scheme not found' }, { status: 400 });
    }

    // Fetch keyboard geometry and layout
    const geometry = await KeyboardGeometryModel.findOne({
      format: body.keyboardConfiguration.keyboardFormat,
      formFactor: FormFactor.SixtyPercent,
    });

    const layout = await KeyboardLayoutModel.findOne({ layoutId: body.keyboardConfiguration.keyboardLayoutId });

    if (!geometry || !layout) {
      return Response.json({ error: 'Keyboard geometry or layout not found' }, { status: 404 });
    }

    // Find or create keyboard profile
    let keyboardProfile = await KeyboardProfileModel.findOne({
      geometry: geometry._id,
      layout: layout._id,
      keyFingerMappingScheme: keyFingerMappingSchemeId,
    });

    if (!keyboardProfile) {
      keyboardProfile = await KeyboardProfileModel.create({
        geometry: geometry._id,
        layout: layout._id,
        keyFingerMappingScheme: keyFingerMappingSchemeId,
      });
    }

    // Find or create user keyboard profile
    let userKeyboardProfile = await UserKeyboardProfileModel.findOne({
      userId: new Types.ObjectId(userId),
      keyboardProfile: keyboardProfile._id,
    });

    const exerciseSet = await ExerciseSetModel.findOne({ keyboardProfile: keyboardProfile._id });
    if (!exerciseSet) {
      return Response.json({ error: 'Exercise set not found' }, { status: 404 });
    }

    if (!userKeyboardProfile) {
      userKeyboardProfile = await UserKeyboardProfileModel.create({
        user: userId,
        keyboardProfile: keyboardProfile._id,
        currentExerciseSet: exerciseSet._id,
      });
    } else {
      await UserKeyboardProfileModel.updateOne(
        { _id: userKeyboardProfile._id },
        { $set: { currentExerciseSet: exerciseSet._id } }
      );
    }

    // Update user with new keyboard settings
    const updatedUser = await UserModel.findByIdAndUpdate(
      new Types.ObjectId(userId),
      {
        $set: {
          'keyboardSettings.system': body.keyboardConfiguration.system,
          'keyboardSettings.activeUserKeyboardProfile': userKeyboardProfile._id,
        },
        $addToSet: {
          'keyboardSettings.availableUserKeyboardProfiles': userKeyboardProfile._id,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }

    // Return success response
    const response: ApiResponse = {
      success: true,
      message: 'Профиль пользователя успешно обновлен',
      data: {
        userKeyboardProfileId: userKeyboardProfile._id,
        keyboardProfileId: keyboardProfile._id,
        exerciseSetId: exerciseSet._id,
      },
    };

    return Response.json(response, { status: 200 });
  } catch (error) {
    // Log error for debugging
    console.error('Error in POST /keyboard-settings:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
