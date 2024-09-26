// export { currentProfile } from './currentProfile';
import client from '@/shared/config/ky';

import { UpdateUserProfileData, UpdateUserProfileResponse } from '../types';

export const updateUserProfile = async (data: UpdateUserProfileData): Promise<UpdateUserProfileResponse> => {
  try {
    const response = await client.patch(`api/user`, {
      json: data,
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error: any) {
    return Promise.reject(new Error(`Не удалось обновить профиль: ${error.message}`));
  }
};
