import { Options } from 'ky';

import client from '@/shared/config/ky';

import { CheckUsernameUniqueResponse, UpdateUserProfileRequest, UpdateUserProfileResponse } from '../model/types';

interface UserApi {
  updateProfile: (data: UpdateUserProfileRequest) => Promise<UpdateUserProfileResponse>;
  checkUsername: (username: string, options?: Options) => Promise<CheckUsernameUniqueResponse>;
}

const userApi: UserApi = {
  updateProfile: (data: UpdateUserProfileRequest) => client.post('user', { json: data }).json(),
  checkUsername: (username: string, options?: Options) => client.get(`check-username/${username}`, options).json(),
};

export default userApi;
