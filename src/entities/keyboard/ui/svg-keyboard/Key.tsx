import { memo } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import HomeMark from './HomeMark';
import Rect from './Rect';
import RightHandMark from './RightHandMark';
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
  rightHandMark?: boolean;
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  bottomRightLabel,
  centerLeftLabel,
  homing = false,
  visible = true,
  fill = '#efefee',
  fontColor = '#22211f',
  rightHandMark,
  sx,
  ...props
}: KeyProps) {
  return (
    <Box id={id} component="svg" x={x} y={y} sx={{ visibility: visible ? 'visible' : 'hidden', ...sx }} {...props}>
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
            sx={{ fontSize: '11px', cursor: 'inherit', userSelect: 'none' }}
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
            sx={{ fontSize: '11px', cursor: 'inherit', userSelect: 'none' }}
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
            sx={{ fontSize: '11px', cursor: 'inherit', userSelect: 'none' }}
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
              sx={{ fontSize: '11px', cursor: 'inherit', userSelect: 'none' }}
            >
              {centerLeftLabel}
            </Text>
          </>
        )}
      </>
      {homing && <HomeMark />}
      {rightHandMark && <RightHandMark width={width} height={height} />}
    </Box>
  );
}

export default memo(Key);
