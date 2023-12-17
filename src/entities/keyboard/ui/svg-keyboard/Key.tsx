import { memo } from 'react';

import Box, { type BoxProps } from '@mui/material/Box';

import Rect from './Rect';
import Text from './Text';

interface KeyProps extends BoxProps {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  centerLabel?: string;
  topLeftLabel?: string;
  bottomLeftLabel?: string;
  bottomRightLabel?: string;
  centerLeftLabel?: string;
  homing?: boolean;
  visible?: boolean;
  fill?: string;
  fontColor?: string;
}

function Key({
  id,
  x,
  y,
  width,
  height,
  centerLabel,
  topLeftLabel,
  bottomLeftLabel,
  bottomRightLabel,
  centerLeftLabel,
  homing = false,
  visible = true,
  fill = '#efefee',
  fontColor = '#22211f',
  ...props
}: KeyProps) {
  return (
    <Box
      id={id}
      component="svg"
      x={x}
      y={y}
      sx={{ visibility: visible ? 'visible' : 'hidden' }}
      {...props}
    >
      <Rect x={0} y={0} width={width} height={height} fill={fill} />
      <>
        {centerLabel && (
          <Text
            x={width / 2}
            y={height / 2}
            dominantBaseline="middle"
            textAnchor="middle"
            fill={fontColor}
            textRendering="optimizeLegibility"
            sx={{ fontSize: '11px', cursor: 'default', userSelect: 'none' }}
          >
            {centerLabel}
          </Text>
        )}
        {topLeftLabel && (
          <Text
            x={10}
            y={15}
            fill={fontColor}
            textRendering="optimizeLegibility"
            sx={{ fontSize: '11px', cursor: 'default', userSelect: 'none' }}
          >
            {topLeftLabel}
          </Text>
        )}
        {bottomLeftLabel && (
          <Text
            x={10}
            y={30}
            fill={fontColor}
            textRendering="optimizeLegibility"
            sx={{ fontSize: '11px', cursor: 'default', userSelect: 'none' }}
          >
            {bottomLeftLabel}
          </Text>
        )}
        {centerLeftLabel && (
          <>
            <Text
              x={12}
              y={height / 2 + 2}
              dominantBaseline="middle"
              fill={fontColor}
              textRendering="optimizeLegibility"
              sx={{ fontSize: '10px', cursor: 'default', userSelect: 'none' }}
            >
              {centerLeftLabel}
            </Text>
          </>
        )}
      </>
      {homing && (
        <Rect
          //   rx={2}
          ry={2}
          x={15}
          y={35}
          width={10}
          height={2.5}
          fill={'#cccccc'}
        />
      )}
    </Box>
  );
}

export default memo(Key);
