import { UndefinedInitialDataOptions, UseMutationOptions, useMutation, useQuery } from '@tanstack/react-query';

import {
  CheckUsernameUniqueResponse,
  UpdateUserProfileRequest,
  UpdateUserProfileResponse,
  userApi,
} from '@/entities/user';

export const api = {
  useCheckUsernameUnique: (
    username: string,
    props?: Omit<UndefinedInitialDataOptions<CheckUsernameUniqueResponse>, 'queryKey'>
  ) => {
    return useQuery<CheckUsernameUniqueResponse>({
      queryKey: ['checkUsername', username],
      queryFn: ({ signal }) => userApi.checkUsername(username, { signal }),
      retry: false,
      ...props,
    });
  },
  useUpdateUserProfile: (props?: UseMutationOptions<UpdateUserProfileResponse, Error, UpdateUserProfileRequest>) => {
    return useMutation({
      mutationFn: userApi.updateProfile,
      retry: false,
      ...props,
    });
  },
};
