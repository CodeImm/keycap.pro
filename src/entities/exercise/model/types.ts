import { KeyCode, KeyType, ModifierKey } from '@/shared/types';

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

export interface KeyDefinition {
  code: KeyCode;
  modifier: ModifierKey;
  key: string;
  type: KeyType;
  finger: number;
  alternate?: KeyboardEvent['key'];
}

export interface PressedKey {
  code: KeyCode;
  modifier: ModifierKey;
  key: string;
}

export enum ExerciseLogType {
  // События упражнения
  EXERCISE_START = 'exercise.start', // Начало упражнения
  EXERCISE_PAUSE = 'exercise.pause', // Пауза
  EXERCISE_RESUME = 'exercise.resume', // Возобновление
  EXERCISE_FINISH = 'exercise.finish', // Завершение упражнения

  // События ввода клавиш
  KEY_CORRECT = 'key.correct', // Правильное нажатие клавиши
  KEY_INCORRECT = 'key.incorrect', // Неправильное нажатие клавиши
  KEY_MISSED = 'key.missed', // Пропущенное нажатие клавиши
  KEY_UNEXPECTED = 'key.unexpected', // Случайное нажатие клавиши
}

interface BaseLog {
  type: ExerciseLogType;
  timecode: number; // ms
}

interface ExerciseLog extends BaseLog {
  type:
    | ExerciseLogType.EXERCISE_START
    | ExerciseLogType.EXERCISE_PAUSE
    | ExerciseLogType.EXERCISE_RESUME
    | ExerciseLogType.EXERCISE_FINISH;
}

interface KeyActionLog extends BaseLog {
  type: ExerciseLogType.KEY_CORRECT | ExerciseLogType.KEY_INCORRECT | ExerciseLogType.KEY_MISSED;
  target: KeyDefinition;
  pressedKey?: PressedKey; // undefined для KEY_MISSED
  reaction?: number; // ms, undefined для KEY_MISSED
  isBlindly: boolean;
}

interface UnexpectedKeyLog extends BaseLog {
  type: ExerciseLogType.KEY_UNEXPECTED;
  pressedKey: PressedKey;
}

export type Log = ExerciseLog | KeyActionLog | UnexpectedKeyLog;
