import { useMemo } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import {
  DEFAULT_HOMING_KEYS,
} from '@/entities/keyFingerMapping';

import Inner from './Inner';
import KeyboardRow from './KeyboardRow';
import Rect from './Rect';

import { FingerColorMapping, KeyboardFormat, KeyboardLayoutId, KeyCode, KeyFingerMapping } from '@/shared/types';
import { DEFAULT_EXCLUDED_KEYS } from '../../config';
import { getLayoutById, getVirtualKeyboardLayout } from '../../lib';
import type { System, VirtualKeyboardRowName } from '../../model/types';

const VIEW_BOX = [0, 0, 639, 226];
const ROW_HEIGHT = 40;
const ROW_GAP = 2;

interface Props extends BoxProps {
  system: System;
  layoutId: KeyboardLayoutId;
  keyboardFormat: KeyboardFormat;
  excludedKeys?: KeyCode[];
  homingKeys?: KeyCode[];
  keyFingerMapping?: KeyFingerMapping;
  fingerColorMapping?: FingerColorMapping;
  onClick?: (e: any) => void;
}

export function Keyboard({
  system,
  layoutId,
  keyboardFormat,
  excludedKeys = DEFAULT_EXCLUDED_KEYS,
  homingKeys = DEFAULT_HOMING_KEYS,
  keyFingerMapping,
  fingerColorMapping,
  onClick,
  sx,
  ...props
}: Props) {
  const virtualKeyboardLayout = useMemo(
    () => getVirtualKeyboardLayout(keyboardFormat, system),
    [keyboardFormat, system]
  );

  const layout = useMemo(() => getLayoutById(layoutId), [layoutId]);

  return (
    <Box
      component="svg"
      preserveAspectRatio="xMaxYMax"
      viewBox={`${VIEW_BOX}`}
      sx={{
        aspectRatio: '639 / 226',
        contain: 'strict',
        display: 'block',
        width: '100%',
        ...sx,
      }}
      onClick={onClick}
      {...props}
    >
      <Rect x={0} y={0} rx={9} ry={9} width={639} height={226} fill="#cccccc" />
      <Inner x={5} y={8}>
        {(Object.keys(virtualKeyboardLayout) as VirtualKeyboardRowName[]).map((rowName, index) => (
          <KeyboardRow
            key={rowName as string}
            y={(ROW_HEIGHT + ROW_GAP) * index}
            rowKeys={virtualKeyboardLayout[rowName]}
            layout={layout}
            keyboardFormat={keyboardFormat}
            excludedKeys={excludedKeys}
            homingKeys={homingKeys}
            keyFingerMapping={keyFingerMapping}
            fingerColorMapping={fingerColorMapping}
          />
        ))}
      </Inner>
    </Box>
  );
}

export default Keyboard;
