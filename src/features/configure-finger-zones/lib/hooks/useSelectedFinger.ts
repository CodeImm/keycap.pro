import { ChangeEvent, useState } from 'react';

import { Finger } from '@/entities/keyboard';

interface UseSelectedFinger {
  selectedFinger: Finger;
  handleSelectedFingerChange: (
    _event: ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
}

export function useSelectedFinger(): UseSelectedFinger {
  const [selectedFinger, setSelectedFinger] = useState<number>(
    Finger.LEFT_THUMB
  );

  const handleSelectedFingerChange = (
    _event: ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setSelectedFinger(+value);
  };

  return { selectedFinger, handleSelectedFingerChange };
}
