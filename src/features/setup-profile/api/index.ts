import { UndefinedInitialDataOptions, UseMutationOptions, useMutation, useQuery } from '@tanstack/react-query';
import { z } from 'zod';

import client from '@/shared/config/ky';

import { CompleteRegistrationFormRequestSchema } from '../model/schema';

interface CheckUsernameUniqueResponse {
  isUnique: boolean;
}

export type UpdateUserProfileRequest = z.infer<typeof CompleteRegistrationFormRequestSchema>;

interface UpdateUserProfileResponse {}

const api = {
  useCheckUsernameUnique: (
    username: string,
    props?: Omit<UndefinedInitialDataOptions<CheckUsernameUniqueResponse>, 'queryKey'>
  ) => {
    return useQuery<CheckUsernameUniqueResponse>({
      queryKey: ['checkUsername', username],
      queryFn: ({ signal }) => client.get(`check-username/${username}`, { signal }).then((res) => res.json()),
      retry: false,
      ...props,
    });
  },
  useUpdateUserProfile: (props?: UseMutationOptions<UpdateUserProfileResponse, Error, UpdateUserProfileRequest>) => {
    return useMutation({
      mutationFn: (profile) => client.post(`user`, { json: profile }),
      retry: false,
      ...props,
    });
  },
};

export default api;
