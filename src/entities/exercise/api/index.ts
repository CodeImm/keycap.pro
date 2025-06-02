import client from '@/shared/config/ky';

// API response type for exercises
export interface ExercisesResponse {
  success: boolean;
  message: string;
  data: {
    _id: string;
    exerciseSet: string;
    exercise: {
      _id: string;
      geometry: string;
      homeRow: { [key: string]: string }; // Object with numeric keys
      keyInputs: { code: string; modifier: string }[];
      keyFingerMapping: { [key: string]: number[] };
      type: string;
      hash: string;
      createdAt: string;
      updatedAt: string;
      // Add if included in future
      slug?: string;
      difficulty?: number;
    };
    order: number;
    createdAt: string;
    updatedAt: string;
  }[];
}

export interface ExerciseResponse {
  success: boolean;
  message: string;
  data: {
    _id: string;
    exerciseSet: string;
    exercise: {
      _id: string;
      geometry: string;
      homeRow: { [key: string]: string }; // Object with numeric keys
      keyInputs: { code: string; modifier: string }[];
      keyFingerMapping: { [key: string]: number[] };
      type: string;
      hash: string;
      createdAt: string;
      updatedAt: string;
      // Add if included in future
      slug?: string;
      difficulty?: number;
    };
    order: number;
    createdAt: string;
    updatedAt: string;
  }[];
}

interface ExerciseApi {
  getExercises: () => Promise<ExercisesResponse>;
  getExercise: (id: string) => Promise<ExerciseResponse>;
}

const exercisesApi: ExerciseApi = {
  getExercises: () => client.get(`exercises`).json<ExercisesResponse>(),
  getExercise: (id: string) => client.get(`exercises/${id}`).json<ExerciseResponse>(),
};

export default exercisesApi;
