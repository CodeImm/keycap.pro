import { useCallback, useEffect, useState } from 'react';

import {
  KeyFingerMappingScheme,
  KeyFingerMappingSchemeId,
  keyIdsForFingerMappingScheme,
} from '@/entities/keyFingerMapping';
import type { LayoutKeyId } from '@/entities/keyboard';
import { DEFAULT_EXCLUDED_KEYS } from '@/entities/keyboard';
import { getKeyFingerMappingById } from '@/entities/keyboard/lib';
import { Finger } from '@/shared/types';

interface UseKeyFingerMapping {
  keyFingerMapping: KeyFingerMappingScheme;
  handleKeyClick: (event: MouseEvent) => void;
  handleReset(id?: KeyFingerMappingSchemeId): void;
}

interface Props {
  defaultValues: KeyFingerMappingScheme;
  selectedFinger: Finger;
}

export function useKeyFingerMapping({ defaultValues, selectedFinger }: Props): UseKeyFingerMapping {
  const [keyFingerMapping, setKeyFingerMapping] = useState<KeyFingerMappingScheme>(defaultValues);

  const updateKeyFingerMapping = useCallback((keyId: LayoutKeyId, finger: Finger) => {
    setKeyFingerMapping((currentMapping) => ({
      ...currentMapping,
      [keyId]: finger,
    }));
  }, []);

  const handleReset = (id: Exclude<KeyFingerMappingSchemeId, 'custom'> = 'optimized') => {
    setKeyFingerMapping(getKeyFingerMappingById(id));
  };

  const handleKeyFingerChange = useCallback(
    (id: LayoutKeyId | undefined | any) => {
      if (id && keyIdsForFingerMappingScheme.includes(id) && !DEFAULT_EXCLUDED_KEYS.includes(id)) {
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
