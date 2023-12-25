import { useMemo } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import Inner from './Inner';
import KeyboardRow from './KeyboardRow';
import Rect from './Rect';

import { DEFAULT_EXCLUDED_KEYS, DEFAULT_HOME_KEYS } from '../../config';
import { getLayoutById, getVirtualKeyboardLayoutById } from '../../lib';
import type {
  FingerColorMapping,
  KeyFingerMapping,
  LayoutId,
  LayoutKeyId,
  LayoutType,
  VirtualKeyboardRowName,
} from '../../model';

const VIEW_BOX = [0, 0, 639, 226];
const ROW_HEIGHT = 40;
const ROW_GAP = 2;

interface Props extends BoxProps {
  layoutId: LayoutId;
  layoutType: LayoutType;
  excludedKeys?: LayoutKeyId[];
  homeKeys?: LayoutKeyId[];
  keyFingerMapping?: KeyFingerMapping;
  fingerColorMapping?: FingerColorMapping;
  onClick?: (e: any) => void;
}

export function Keyboard({
  layoutId,
  layoutType,
  excludedKeys = DEFAULT_EXCLUDED_KEYS,
  homeKeys = DEFAULT_HOME_KEYS,
  keyFingerMapping,
  fingerColorMapping,
  onClick,
  sx,
  ...props
}: Props) {
  const layout = useMemo(() => getLayoutById(layoutId), [layoutId]);
  const virtualKeyboardLayout = useMemo(
    () => getVirtualKeyboardLayoutById(layoutType),
    [layoutType]
  );

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
        {(Object.keys(virtualKeyboardLayout) as VirtualKeyboardRowName[]).map(
          (rowName, index) => (
            <KeyboardRow
              key={rowName as string}
              y={(ROW_HEIGHT + ROW_GAP) * index}
              rowKeys={virtualKeyboardLayout[rowName]}
              keyData={layout}
              layoutType={layoutType}
              excludedKeys={excludedKeys}
              homeKeys={homeKeys}
              keyFingerMapping={keyFingerMapping}
              fingerColorMapping={fingerColorMapping}
            />
          )
        )}
      </Inner>
    </Box>
  );
}

export default Keyboard;
