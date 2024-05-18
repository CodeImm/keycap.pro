import { getSession } from 'next-auth/react';

import client from '@/shared/config/ky';

import { UpdateUserProfileData, UpdateUserProfileResponse } from '../types';

export const updateUserProfile = async (data: UpdateUserProfileData): Promise<UpdateUserProfileResponse> => {
  try {
    const session = await getSession();
    const userId = session?.user?.id;

    if (!userId) {
      throw new Error('Пользователь не аутентифицирован');
    }

    const response = await client.patch(`api/user/${userId}`, {
      json: data,
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    return Promise.reject(new Error(`Не удалось обновить профиль: ${error.message}`));
  }
};
