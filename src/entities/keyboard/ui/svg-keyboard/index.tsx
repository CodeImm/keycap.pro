import { useMemo } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import Inner from './Inner';
import KeyboardRow from './KeyboardRow';
import Rect from './Rect';

import { getLayoutById, getVirtualKeyboardLayoutById } from '../../libs';
import type {
  FingersColorsSchema,
  FingersZonesSchema,
  LayoutId,
  LayoutKeyId,
  LayoutType,
  VirtualKeyboardRowName,
} from '../../model';

const DEFAULT_EXCLUDED_KEYS: LayoutKeyId[] = [
  'MetaLeft',
  'Fn',
  'MetaRight',
  'ContextMenu',
];
const DEFAULT_HOME_KEYS: LayoutKeyId[] = ['KeyF', 'KeyJ'];

const VIEW_BOX = [0, 0, 639, 226];
const ROW_HEIGHT = 40;
const ROW_GAP = 2;

interface Props extends BoxProps {
  layoutId: LayoutId;
  layoutType: LayoutType;
  excludedKeys?: LayoutKeyId[];
  homeKeys?: LayoutKeyId[];
  fingersZonesSchema?: FingersZonesSchema;
  fingersColorsSchema?: FingersColorsSchema;
  onKeyColorChange?: (e: any) => void;
}

export function Keyboard({
  layoutId,
  layoutType,
  excludedKeys = DEFAULT_EXCLUDED_KEYS,
  homeKeys = DEFAULT_HOME_KEYS,
  fingersZonesSchema,
  fingersColorsSchema,
  onKeyColorChange,
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
      onClick={onKeyColorChange}
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
              fingersZonesSchema={fingersZonesSchema}
              fingersColorsSchema={fingersColorsSchema}
            />
          )
        )}
      </Inner>
    </Box>
  );
}

export default Keyboard;
