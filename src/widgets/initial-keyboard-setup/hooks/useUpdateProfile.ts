import { useMutation } from '@tanstack/react-query';

import { updateUserProfile } from '../api';
import { UpdateUserProfileData, UpdateUserProfileResponse } from '../types';

export const useUpdateProfile = () =>
  useMutation<UpdateUserProfileResponse, Error, UpdateUserProfileData>({
    mutationFn: updateUserProfile,
  });
