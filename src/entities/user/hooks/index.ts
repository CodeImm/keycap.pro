import { useMutation } from '@tanstack/react-query';

import client from '@/shared/config/ky';

import { UpdateUserProfileData, UpdateUserProfileResponse } from '../types';

export const UserProfileAPI = {
  useUpdateProfile: () =>
    useMutation<UpdateUserProfileResponse, Error, UpdateUserProfileData>({
      mutationFn: async (data) => {
        try {
          return await client
            .patch(`api/user`, {
              json: data,
            })
            .json();
        } catch (error) {
          return Promise.reject(error);
        }
      },
    }),
};
