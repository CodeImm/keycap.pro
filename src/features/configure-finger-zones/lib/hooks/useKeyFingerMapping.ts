import { useCallback, useEffect, useState } from 'react';

import type {
  Finger,
  KeyFingerMapping,
  KeyFingerMappingId,
  LayoutKeyId,
} from '@/entities/keyboard';
import {
  DEFAULT_EXCLUDED_KEYS,
  enhancedLayoutKeyIds,
} from '@/entities/keyboard';
import { getKeyFingerMappingById } from '@/entities/keyboard/lib';

interface UseKeyFingerMapping {
  keyFingerMapping: KeyFingerMapping;
  handleKeyClick: (event: MouseEvent) => void;
  handleReset(id?: KeyFingerMappingId): void;
}

interface Props {
  defaultValues: KeyFingerMapping;
  selectedFinger: Finger;
}

export function useKeyFingerMapping({
  defaultValues,
  selectedFinger,
}: Props): UseKeyFingerMapping {
  const [keyFingerMapping, setKeyFingerMapping] =
    useState<KeyFingerMapping>(defaultValues);

  const updateKeyFingerMapping = useCallback(
    (keyId: LayoutKeyId, finger: Finger) => {
      setKeyFingerMapping((currentMapping) => ({
        ...currentMapping,
        [keyId]: finger,
      }));
    },
    []
  );

  const handleReset = (
    id: Exclude<KeyFingerMappingId, 'custom'> = 'optimized'
  ) => {
    setKeyFingerMapping(getKeyFingerMappingById(id));
  };

  const handleKeyFingerChange = useCallback(
    (id: LayoutKeyId | undefined) => {
      if (
        id &&
        enhancedLayoutKeyIds.includes(id) &&
        !DEFAULT_EXCLUDED_KEYS.includes(id)
      ) {
        updateKeyFingerMapping(id, selectedFinger);
      }
    },
    [selectedFinger, updateKeyFingerMapping]
  );

  const handleKeyClick = (event: MouseEvent) => {
    const { target } = event;
    const id = (target as SVGElement)?.closest('svg')?.id;

    handleKeyFingerChange(id as LayoutKeyId);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { code } = event;
      handleKeyFingerChange(code as LayoutKeyId);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyFingerChange]);

  return { keyFingerMapping, handleKeyClick, handleReset };
}
