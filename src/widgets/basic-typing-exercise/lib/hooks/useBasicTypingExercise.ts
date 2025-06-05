import { KeyboardEvent } from 'react';

import { KeyDefinition, Log } from '@/entities/exercise';
import { KeyInput } from '@/shared/types';

interface UseBasicTypingExercise {
  isBlindInput: boolean;
  isFocused: boolean;
  progress1: number;
  progress2: number;
  seconds: number;
  logs: Log[];
  isStarted: boolean;
  isPaused: boolean;
  isFinished: boolean;
  targetKey: KeyDefinition;
  pressedKeys: Set<string>;
  reset: () => void;
  handleKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleKeyUp: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
  handleBlur: () => void;
}

interface Props {
  keyInputs: KeyInput[];
}

export function useBasicTypingExercise({ keyInputs }: Props): UseBasicTypingExercise {}
