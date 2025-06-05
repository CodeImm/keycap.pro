import { BoxProps } from '@mui/material/Box';

import { DEFAULT_FINGER_COLOR_MAPPING } from '@/entities/keyFingerMapping';
import { System, TrainingKeyboard } from '@/entities/keyboard';
import {
  FingerColorMapping,
  KeyCode,
  KeyFingerMapping,
  KeyboardFormat,
  KeyboardLayout,
  ModifierKey,
} from '@/shared/types';

import { useBasicTypingExercise } from '../lib';

interface Props extends BoxProps {
  system: System;
  layout: KeyboardLayout;
  keyboardFormat: KeyboardFormat;
  excludedKeys?: KeyCode[];
  homeRow: KeyCode[];
  keyFingerMapping?: KeyFingerMapping;
  fingerColorMapping?: FingerColorMapping;
}

export function BasicTypingExercise({
  system = System.Windows,
  layout,
  keyboardFormat,
  homeRow,
  keyFingerMapping,
  fingerColorMapping = DEFAULT_FINGER_COLOR_MAPPING,
}: Props) {
  const {
    targetKey,
    pressedKeys,
    isBlindInput,
    progress1,
    progress2,
    logs,
    isFinished,
    isStarted,
    isPaused,
    isFocused,
    reset,
    handleKeyPress,
    handleKeyUp,
    handleKeyDown,
    handleFocus,
    handleBlur,
  } = useBasicTypingExercise({ keyInputs: [{}] });

  return (
    <TrainingKeyboard
      targetKey={{ code: 'KeyA', modifier: ModifierKey.SHIFT }}
      pressedKeys={[]}
      isBlindInput={true}
      system={system}
      layout={layout}
      keyboardFormat={keyboardFormat}
      keyFingerMapping={keyFingerMapping}
      fingerColorMapping={fingerColorMapping}
      homingKeys={[homeRow[3], homeRow[6]]}
    />
  );
}

export default BasicTypingExercise;
