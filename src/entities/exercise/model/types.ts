export enum ExerciseType {
  Basic = 'basic',
  Combination = 'combination',
  Speed = 'speed',
  Custom = 'custom',
}

export interface ExerciseSet {
  _id: string;
  keyboardProfile: string; // Ref to KeyboardProfile
  exercises?: { id: string; title: string; content: string }[]; // Optional array of exercises
  createdAt?: string;
  updatedAt?: string;
}
