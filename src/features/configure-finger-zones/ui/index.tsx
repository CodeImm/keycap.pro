'use client';

import Box from '@mui/material/Box';

import {
  KeyFingerMapping,
  Keyboard,
  LayoutId,
  LayoutType,
  fingerColorMapping as defaultFingerColorMapping,
} from '@/entities/keyboard';

import FingerSelectionForm from './FingerSelectionForm';

import { useKeyFingerMapping, useSelectedFinger } from '../lib/hooks';

interface CallbackActions {
  getValues(): KeyFingerMapping;
}

interface Props {
  defaultValues: KeyFingerMapping;
  layoutType: LayoutType;
  layoutId: LayoutId;
  actions({ getValues }: CallbackActions): JSX.Element;
}
//TODO: submitButtonText по умолчанию с t
export function KeyFingerMappingForm({
  defaultValues,
  layoutType,
  layoutId,
  actions,
}: Props) {
  const { selectedFinger, handleSelectedFingerChange } = useSelectedFinger();

  const { keyFingerMapping, handleKeyClick } = useKeyFingerMapping({
    defaultValues,
    selectedFinger,
  });

  const _onSubmit = () => {
    return keyFingerMapping;
  };

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        flex: 1,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2 }}>
        <FingerSelectionForm
          value={selectedFinger}
          onChange={handleSelectedFingerChange}
          fingerColorMapping={defaultFingerColorMapping}
        />
      </Box>

      <Box
        component="form"
        sx={{
          px: '10%',
        }}
      >
        <Keyboard
          layoutId={layoutId}
          layoutType={layoutType}
          fingerColorMapping={defaultFingerColorMapping}
          keyFingerMapping={keyFingerMapping}
          onClick={handleKeyClick}
        />
      </Box>

      {actions({
        getValues: () => _onSubmit(),
      })}
    </Box>
  );
}
