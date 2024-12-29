import { memo } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import HomeMark from './HomeMark';
import RightHandMark from './RightHandMark';
import Text from './Text';

const labelPadding = 5;
const labelOffset = 0;

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
      <Box component="path" d={`M 0 0 H ${width} V ${height} H 0 Z`} fill={fill} />
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
            x={labelPadding}
            y={labelPadding}
            dominantBaseline="text-before-edge"
            textAnchor="start"
            textRendering="optimizeLegibility"
            sx={{ fontSize: '11px', cursor: 'inherit', userSelect: 'none' }}
          >
            {topLeftLabel}
          </Text>
        )}
        {bottomLeftLabel && (
          <Text
            x={labelPadding}
            y={height - labelPadding}
            dominantBaseline="text-after-edge"
            textAnchor="start"
            fill={fontColor}
            textRendering="optimizeLegibility"
            sx={{ fontSize: '11px', cursor: 'inherit', userSelect: 'none' }}
          >
            {bottomLeftLabel}
          </Text>
        )}
        {bottomRightLabel && (
          <Text
            x={width - labelPadding}
            y={height - labelPadding}
            dominantBaseline="text-after-edge"
            textAnchor="end"
            fill={fontColor}
            textRendering="optimizeLegibility"
            sx={{ fontSize: '11px', cursor: 'inherit', userSelect: 'none' }}
          >
            {bottomRightLabel}
          </Text>
        )}
        {centerLeftLabel && (
          <>
            <Text
              x={labelPadding + labelOffset}
              y={height / 2}
              dominantBaseline="middle"
              textAnchor="start"
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
