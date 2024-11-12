import { Types } from 'mongoose';

import { KeyFingerMappingSchemeType, generateHash } from '@/entities/keyFingerMapping';
import KeyFingerMappingModel from '@/entities/keyFingerMapping/model/KeyFingerMapping';
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
    const existingScheme = await KeyFingerMappingModel.findOne({
      hash,
    });
    // console.log({ existingScheme });
    let keyFingerMappingSchemeId;

    if (existingScheme) {
      keyFingerMappingSchemeId = existingScheme._id;
    } else {
      const newScheme = new KeyFingerMappingModel({
        schemeType: KeyFingerMappingSchemeType.Custom,
        keyFingerMappingScheme: body.keyFingerMappingSchema,
      });
      // console.log({ newScheme });
      const savedScheme = await newScheme.save();
      keyFingerMappingSchemeId = savedScheme._id;
    }

    const existingKeyboardProfile = await KeyboardProfileModel.findOne({
      format: body.keyboardConfiguration.keyboardFormat,
      layout: body.keyboardConfiguration.keyboardLayoutId,
      keyFingerMappingSchemeId,
    });
    // console.log({ existingKeyboardProfile });
    if (existingKeyboardProfile) {
      const userKeyboardProfiles = await UserKeyboardProfileModel.find({ userId: userId });
      // console.log({ userKeyboardProfiles });
      const profileExists = userKeyboardProfiles.some(
        (userKeyboardProfile) =>
          userKeyboardProfile.keyboardProfileId.toString() === existingKeyboardProfile._id.toString()
      );
      // console.log({ profileExists });
      if (profileExists) {
        return new Response('Profile already linked to user', { status: 400 });
      }
      const newUserKeyboardProfile = new UserKeyboardProfileModel({
        userId,
        keyboardProfileId: existingKeyboardProfile._id,
      });
      await newUserKeyboardProfile.save();
      // console.log({ newUserKeyboardProfile });
    } else {
      const newProfile = new KeyboardProfileModel({
        userId,
        layout: body.keyboardConfiguration.keyboardLayoutId,
        format:body.keyboardConfiguration.keyboardFormat,
        keyFingerMappingSchemeId,
      });
      const savedProfile = await newProfile.save();
      // console.log({ savedProfile });

      const userKeyboardProfile = new UserKeyboardProfileModel({
        userId,
        keyboardProfileId: savedProfile._id,
      });
      // console.log({ userKeyboardProfile });
      await userKeyboardProfile.save();
    }

    await UserModel.findByIdAndUpdate(
      new Types.ObjectId(userId),
      { $set: { 'keyboardSettings.system': body.keyboardConfiguration.system } },
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
