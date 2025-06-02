import { useMemo } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import { DEFAULT_HOMING_KEYS } from '@/entities/keyFingerMapping';
import { FingerColorMapping, KeyCode, KeyFingerMapping, KeyboardFormat, KeyboardLayoutId } from '@/shared/types';

import Inner from './Inner';
import KeyboardRow from './KeyboardRow';
import Rect from './Rect';

import { ansi, iso } from '../../config';
import { getLayoutById } from '../../lib';
import { getKeycapLegends } from '../../lib/getKeycapLegends';
import type { System } from '../../model/types';

const VIEW_BOX = [0, 0, 639, 226];

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
  excludedKeys = [],
  homingKeys = DEFAULT_HOMING_KEYS,
  keyFingerMapping,
  fingerColorMapping,
  onClick,
  sx,
  ...props
}: Props) {
  const keyboardGeometry = useMemo(() => (keyboardFormat === 'iso' ? iso : ansi), [keyboardFormat]);

  const layout = useMemo(() => getLayoutById(layoutId), [layoutId]);

  const keycapLegends = useMemo(() => getKeycapLegends(layout, system), [system, layout]);

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
        {keyboardGeometry.map((row, index) => (
          <KeyboardRow
            key={index}
            rowKeys={row}
            layout={layout}
            legends={keycapLegends}
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
