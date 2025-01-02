import React from 'react';

import { Box, BoxProps } from '@mui/material';

interface RightHandMark extends BoxProps<'g'> {
  size?: number;
  color?: string;
  label?: string;
}

const RightHandMark = ({ size = 10, color = '#ACACAC', label = '', sx, ...props }: RightHandMark) => {
  const getPathWithRoundedCorner = (x: number, y: number, size: number, radius: number) => `
  M ${x + radius},${y} 
  L ${x + size},${y} 
  L ${x + size},${y + size} 
  L ${x},${y + size} 
  L ${x},${y + radius} 
  Q ${x},${y} ${x + radius},${y} 
  Z
`;

  const pathData = getPathWithRoundedCorner(props.x - size, props.y - size, size, size / 2);

  return (
    <Box
      component="g"
      sx={{
        ...sx,
      }}
      {...props}
    >
      <Box component="path" d={pathData} fill={color} />
      {label && (
        <Box
          component="text"
          x={props.x - size / 2}
          y={props.y - size / 2 + 1}
          fill="#FFF"
          fontSize={size / 2 + 1}
          dominantBaseline="middle"
          textAnchor="middle"
          textRendering="optimizeLegibility"
        >
          {label}
        </Box>
      )}
    </Box>
  );
};

export default RightHandMark;
