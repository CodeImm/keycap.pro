import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query';

import client from '@/shared/config/ky';

interface CheckUsernameUniqueResponse {
  isUnique: boolean;
}

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
};

export default api;
