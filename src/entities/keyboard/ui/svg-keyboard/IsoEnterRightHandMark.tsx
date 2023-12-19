import Box, { BoxProps } from '@mui/material/Box';

import Text from './Text';

interface Props extends BoxProps<'polygon'> {
  width: number;
  height: number;
}

export default function IsoEnterRightHandMark({ width, height }: Props) {
  return (
    <>
      <Box
        component="polygon"
        points={`${width - 35} ${height + 42 - 15}, ${width - 35} ${
          height + 42
        }, ${width - 35 - 15} ${height + 42}`}
        sx={{ strokeWidth: 1, stroke: 'none', fill: '#ACACAC' }}
      />
      <Text
        x={width - 35 - 6}
        y={height + 42 - 2}
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
