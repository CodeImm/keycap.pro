import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { exercisesApi } from '@/entities/exercise';
import { ExercisesResponse } from '@/entities/exercise/api';

/**
 * Custom hooks for exercises API
 */
const api = {
  /**
   * Hook to fetch exercises for the user's active keyboard profile
   * @param options - Optional react-query options
   * @returns Query result with exercise set data
   */
  useGetExercises: (
    options?: Omit<UseQueryOptions<ExercisesResponse, unknown, ExercisesResponse, string[]>, 'queryKey' | 'queryFn'>
  ) => {
    return useQuery<ExercisesResponse, unknown, ExercisesResponse, string[]>({
      queryKey: ['exercises'],
      queryFn: () => exercisesApi.getExercises(),
      ...options,
    });
  },
};

export default api;
