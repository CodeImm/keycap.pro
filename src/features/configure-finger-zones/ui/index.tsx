'use client';

import { ChangeEvent, useState } from 'react';

import Box from '@mui/material/Box';

import {
  Finger,
  FingersZonesSchema,
  Keyboard,
  LayoutId,
  LayoutKeyId,
  LayoutType,
} from '@/entities/keyboard';
import { fingersColorsSchema as defaultFingersColorSchema } from '@/entities/keyboard';

import ActiveFingerForm from './ActiveFingerForm';

const DEFAULT_EXCLUDED_KEYS: LayoutKeyId[] = [
  'MetaLeft',
  'Fn',
  'MetaRight',
  'ContextMenu',
];

interface CallbackActions {
  getValues(): FingersZonesSchema;
}

interface Props {
  defaultValues: FingersZonesSchema;
  layoutType: LayoutType;
  layoutId: LayoutId;
  actions({ getValues }: CallbackActions): JSX.Element;
}
//TODO: submitButtonText по умолчанию с t
export function ConfigureFingersZonesForm({
  defaultValues,
  layoutType,
  layoutId,
  actions,
}: Props) {
  const [activeFinger, setActiveFinger] = useState<number>(Finger.LEFT_THUMB);
  const handleChange = (
    _event: ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setActiveFinger(+value);
  };

  const [fingersZonesSchema, setFingersZonesSchema] = useState(defaultValues);

  const handleKeyColorChange = (event: MouseEvent) => {
    const { target } = event;

    const id = (target as SVGElement)?.closest('svg')?.id as LayoutKeyId;

    if (id && !DEFAULT_EXCLUDED_KEYS.includes(id)) {
      setFingersZonesSchema((prevState) => ({
        ...prevState,
        [id]: activeFinger,
      }));
    }
  };

  const _onSubmit = () => {
    return fingersZonesSchema;
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
        <ActiveFingerForm
          value={activeFinger}
          onChange={handleChange}
          fingersColorSchema={defaultFingersColorSchema}
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
          fingersColorsSchema={defaultFingersColorSchema}
          fingersZonesSchema={fingersZonesSchema}
          onKeyColorChange={handleKeyColorChange}
        />
      </Box>

      {actions({
        getValues: () => _onSubmit(),
      })}
    </Box>
  );
}
