import Box, { BoxProps } from '@mui/material/Box';

import Text from './Text';

interface Props extends BoxProps<'polygon'> {
  width: number;
  height: number;
}

export default function RightHandMark({ width, height, ...props }: Props) {
  return (
    <>
      <Box
        component="polygon"
        points={`${width} ${height - 15}, ${width} ${height}, ${
          width - 15
        } ${height}`}
        sx={{ strokeWidth: 1, stroke: 'none', fill: '#ACACAC' }}
        {...props}
      />
      <Text
        x={width - 6}
        y={height - 2}
        fill="#fff"
        textRendering="optimizeLegibility"
        sx={{
          fontSize: '6px',
          cursor: 'inherit',
          // color: '#fff',
          userSelect: 'none',
        }}
      >
        R
      </Text>
    </>
  );
}
