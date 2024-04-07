'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import {
  KeyFingerMapping,
  Keyboard,
  LayoutId,
  LayoutType,
  System,
  fingerColorMapping as defaultFingerColorMapping,
} from '@/entities/keyboard';

import FingerSelectionForm from './FingerSelectionForm';
import KeyFingerMappingSelector from './KeyFingerMappingSelector';

import { useKeyFingerMapping, useSelectedFinger } from '../lib/hooks';

interface CallbackActions {
  getValues(): KeyFingerMapping;
}

interface Props {
  defaultValues: KeyFingerMapping;
  system: System;
  layoutType: LayoutType;
  layoutId: LayoutId;
  actions({ getValues }: CallbackActions): JSX.Element;
}
//TODO: submitButtonText по умолчанию с t
export function KeyFingerMappingForm({
  defaultValues,
  system,
  layoutType,
  layoutId,
  actions,
}: Props) {
  const { selectedFinger, handleSelectedFingerChange } = useSelectedFinger();

  const { keyFingerMapping, handleKeyClick, handleReset } = useKeyFingerMapping(
    {
      defaultValues,
      selectedFinger,
    }
  );

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
          system={system}
          layoutId={layoutId}
          layoutType={layoutType}
          fingerColorMapping={defaultFingerColorMapping}
          keyFingerMapping={keyFingerMapping}
          onClick={handleKeyClick}
        />
      </Box>
      <KeyFingerMappingSelector
        system={system}
        layoutId={layoutId}
        layoutType={layoutType}
        fingerColorMapping={defaultFingerColorMapping}
        defaultValue={'optimized'}
        keyFingerMappingIdList={['optimized', 'logical']}
        customKeyFingerMapping={keyFingerMapping}
        onChange={handleReset}
      />
      <Button onClick={() => handleReset()}>Сбросить</Button>

      {actions({
        getValues: () => _onSubmit(),
      })}
    </Box>
  );
}
