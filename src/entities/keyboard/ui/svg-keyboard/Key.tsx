import { memo } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import { KeyCode } from '@/shared/types';

import HomeMark from './HomeMark';
import RightHandMark from './RightHandMark';
import Text from './Text';

import { KeycapLegends, LegendCoordinates } from '../..';
import { extractBottomRightCoordinates } from '../../lib/svg';

interface KeyProps extends BoxProps {
  id: string;
  x: number;
  y: number;
  d: string;
  rotate: string;
  legendCoordinates: LegendCoordinates;
  legend?: KeycapLegends[KeyCode];
  homing?: boolean;
  visible?: boolean;
  fill?: string;
  fontColor?: string;
  rightHandMark?: boolean;
}

function Key({
  id,
  x,
  y,
  d,
  rotate,
  legendCoordinates,
  legend,
  homing = false,
  visible = true,
  fill = '#efefee',
  fontColor = '#22211f',
  rightHandMark,
  sx,
  ...props
}: KeyProps) {
  const { x: lastX, y: lastY } = extractBottomRightCoordinates(d);

  return (
    <Box id={id} component="svg" x={x} y={y} sx={{ visibility: visible ? 'visible' : 'hidden', ...sx }} {...props}>
      <Box component="path" d={d} fill={fill} transform={`rotate(${rotate})`} />
      <>
        {legend?.center && (
          <Text
            x={legendCoordinates.center.x}
            y={legendCoordinates.center.y}
            dominantBaseline="middle"
            textAnchor="middle"
            fill={fontColor}
            textRendering="optimizeLegibility"
            sx={{ fontSize: '11px', cursor: 'inherit', userSelect: 'none' }}
          >
            {legend.center}
          </Text>
        )}
        {legend?.leftTop && (
          <Text
            x={legendCoordinates.leftTop.x}
            y={legendCoordinates.leftTop.y}
            dominantBaseline="text-before-edge"
            textAnchor="start"
            textRendering="optimizeLegibility"
            sx={{ fontSize: '11px', cursor: 'inherit', userSelect: 'none' }}
          >
            {legend.leftTop}
          </Text>
        )}
        {legend?.leftBottom && (
          <Text
            x={legendCoordinates.leftBottom.x}
            y={legendCoordinates.leftBottom.y}
            dominantBaseline="text-after-edge"
            textAnchor="start"
            fill={fontColor}
            textRendering="optimizeLegibility"
            sx={{ fontSize: '11px', cursor: 'inherit', userSelect: 'none' }}
          >
            {legend.leftBottom}
          </Text>
        )}
        {legend?.rightBottom && (
          <Text
            x={legendCoordinates.rightBottom.x}
            y={legendCoordinates.rightBottom.y}
            dominantBaseline="text-after-edge"
            textAnchor="end"
            fill={fontColor}
            textRendering="optimizeLegibility"
            sx={{ fontSize: '11px', cursor: 'inherit', userSelect: 'none' }}
          >
            {legend.rightBottom}
          </Text>
        )}
        {legend?.leftCenter && (
          <>
            <Text
              x={legendCoordinates.leftCenter.x}
              y={legendCoordinates.leftCenter.y}
              dominantBaseline="middle"
              textAnchor="start"
              fill={fontColor}
              textRendering="optimizeLegibility"
              sx={{ fontSize: '11px', cursor: 'inherit', userSelect: 'none' }}
            >
              {legend.leftCenter}
            </Text>
          </>
        )}
        {legend?.rightCenter && (
          <>
            <Text
              x={legendCoordinates.rightCenter.x}
              y={legendCoordinates.rightCenter.y}
              dominantBaseline="middle"
              textAnchor="end"
              fill={fontColor}
              textRendering="optimizeLegibility"
              sx={{ fontSize: '11px', cursor: 'inherit', userSelect: 'none' }}
            >
              {legend.rightCenter}
            </Text>
          </>
        )}
      </>
      {homing && <HomeMark />}
      {rightHandMark && <RightHandMark x={lastX} y={lastY} label="R" size={8} />}
    </Box>
  );
}

export default memo(Key);
