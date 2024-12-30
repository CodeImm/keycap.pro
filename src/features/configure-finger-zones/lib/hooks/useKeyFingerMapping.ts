import { useCallback, useEffect, useState } from 'react';

import { KeyFingerMappingSchemeId } from '@/entities/keyFingerMapping';
import { DEFAULT_EXCLUDED_KEYS } from '@/entities/keyboard';
import { getKeyFingerMappingById } from '@/entities/keyboard/lib';
import { Finger, KeyCode, KeyFingerMapping, keyCodes } from '@/shared/types';

interface UseKeyFingerMapping {
  keyFingerMapping: KeyFingerMapping;
  handleKeyClick: (event: MouseEvent) => void;
  handleReset(id?: KeyFingerMappingSchemeId): void;
}

interface Props {
  defaultValues: KeyFingerMapping;
  selectedFinger: Finger;
}

export function useKeyFingerMapping({ defaultValues, selectedFinger }: Props): UseKeyFingerMapping {
  const [keyFingerMapping, setKeyFingerMapping] = useState<KeyFingerMapping>(defaultValues);

  const updateKeyFingerMapping = useCallback((keyCode: KeyCode, finger: Finger) => {
    setKeyFingerMapping((currentMapping) => ({
      ...currentMapping,
      [keyCode]: [finger],
    }));
  }, []);

  const handleReset = (id: Exclude<KeyFingerMappingSchemeId, 'custom'> = 'optimized') => {
    setKeyFingerMapping(getKeyFingerMappingById(id));
  };

  const handleKeyFingerChange = useCallback(
    (keyCode: KeyCode | undefined | any) => {
      if (keyCode && keyCodes.includes(keyCode) && !DEFAULT_EXCLUDED_KEYS.includes(keyCode)) {
        updateKeyFingerMapping(keyCode, selectedFinger);
      }
    },
    [selectedFinger, updateKeyFingerMapping]
  );

  const handleKeyClick = (event: MouseEvent) => {
    const { target } = event;
    const id = (target as SVGElement)?.closest('svg')?.id;

    handleKeyFingerChange(id as KeyCode);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { code } = event;
      handleKeyFingerChange(code as KeyCode);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyFingerChange]);

  return { keyFingerMapping, handleKeyClick, handleReset };
}
