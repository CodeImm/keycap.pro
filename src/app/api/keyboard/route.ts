import { Types } from 'mongoose';

import { KeyFingerMappingSchemeType, generateHash } from '@/entities/keyFingerMapping';
import KeyFingerMappingSchemeModel from '@/entities/keyFingerMapping/model/KeyFingerMappingScheme';
import { SaveKeyboardSettingsRequest } from '@/entities/keyboard';
import KeyboardProfileModel from '@/entities/keyboard/model/KeyboardProfile';
import { SaveKeyboardSettingsRequestSchema } from '@/entities/keyboard/model/schemas';
import UserModel from '@/entities/user/model/User';
import UserKeyboardProfileModel from '@/entities/userKeyboardProfile/model/UserKeyboardProfileModel';
import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import dbConnect from '@/shared/config/mongodb/dbConnect';

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

    const userId = user.id;

    // console.log({ userId }, { body });

    const hash = generateHash(body.keyFingerMappingSchema);
    // console.log(hash);
    const existingScheme = await KeyFingerMappingSchemeModel.findOne({
      hash,
    });
    // console.log({ existingScheme });
    let keyFingerMappingSchemeId;
    let keyboardProfile: any;

    if (existingScheme) {
      keyFingerMappingSchemeId = existingScheme._id;
    } else {
      const newScheme = new KeyFingerMappingSchemeModel({
        schemeType: KeyFingerMappingSchemeType.Custom,
        keyFingerMappingScheme: body.keyFingerMappingSchema,
      });
      // console.log({ newScheme });
      const savedScheme = await newScheme.save();
      keyFingerMappingSchemeId = savedScheme._id;
    }

    keyboardProfile = await KeyboardProfileModel.findOne({
      format: body.keyboardConfiguration.keyboardFormat,
      layout: body.keyboardConfiguration.keyboardLayoutId,
      keyFingerMappingSchemeId,
    });
    // console.log({ existingKeyboardProfile });
    if (keyboardProfile) {
      const userKeyboardProfiles = await UserKeyboardProfileModel.find({ userId: userId });
      // console.log({ userKeyboardProfiles });
      const profileExists = userKeyboardProfiles.some(
        (userKeyboardProfile) => userKeyboardProfile.keyboardProfileId.toString() === keyboardProfile._id.toString()
      );
      // console.log({ profileExists });
      if (profileExists) {
        // TODO: возможно нужно обновить userprofile
        return new Response('Profile already linked to user', { status: 400 });
      }
      const newUserKeyboardProfile = new UserKeyboardProfileModel({
        userId,
        keyboardProfileId: keyboardProfile._id,
        // TODO: учтановить актуальную версию currentExerciseSetId
      });
      await newUserKeyboardProfile.save();
      // console.log({ newUserKeyboardProfile });
    } else {
      const newProfile = new KeyboardProfileModel({
        userId,
        layout: body.keyboardConfiguration.keyboardLayoutId,
        format: body.keyboardConfiguration.keyboardFormat,
        keyFingerMappingSchemeId,
      });
      keyboardProfile = await newProfile.save();
      // console.log({ savedProfile });
      // TODO: генерация упражнений, создание exerciseSet
      const userKeyboardProfile = new UserKeyboardProfileModel({
        userId,
        keyboardProfileId: keyboardProfile._id,
      });
      // console.log({ userKeyboardProfile });
      await userKeyboardProfile.save();
    }

    await UserModel.findByIdAndUpdate(
      new Types.ObjectId(userId),
      {
        $set: {
          'keyboardSettings.system': body.keyboardConfiguration.system,
          'keyboardSettings.activeKeyboardProfileId': keyboardProfile._id,
        },
      },
      { new: true }
    );

    // console.log(updatedUser);

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
