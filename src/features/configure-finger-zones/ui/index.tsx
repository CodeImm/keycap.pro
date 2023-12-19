'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';

import {
  KeyFingerMapping,
  Keyboard,
  LayoutId,
  LayoutKeyId,
  LayoutType,
  fingerColorMapping as defaultFingerColorMapping,
} from '@/entities/keyboard';

import FingerSelectionForm from './FingerSelectionForm';

import { useSelectedFinger } from '../lib/hooks';

const DEFAULT_EXCLUDED_KEYS: LayoutKeyId[] = [
  'MetaLeft',
  'Fn',
  'MetaRight',
  'ContextMenu',
];

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

  const [keyFingerMapping, setKeyFingerMapping] = useState(defaultValues);

  const handleKeyFingerChange = (event: MouseEvent) => {
    const { target } = event;

    const id = (target as SVGElement)?.closest('svg')?.id as LayoutKeyId;

    if (id && !DEFAULT_EXCLUDED_KEYS.includes(id)) {
      setKeyFingerMapping((prevState) => ({
        ...prevState,
        [id]: selectedFinger,
      }));
    }
  };

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
          excludedKeys={DEFAULT_EXCLUDED_KEYS}
          fingerColorMapping={defaultFingerColorMapping}
          keyFingerMapping={keyFingerMapping}
          onKeyFingerChange={handleKeyFingerChange}
        />
      </Box>

      {actions({
        getValues: () => _onSubmit(),
      })}
    </Box>
  );
}
