import { ReactNode } from 'react';

import Box, { type BoxProps } from '@mui/material/Box';

interface Props extends BoxProps {
  children: ReactNode;
  x: number;
  y: number;
}

function Rect({ children, x, y, ...props }: Props) {
  return (
    <Box component="svg" x={x} y={y} {...props}>
      {children}
    </Box>
  );
}

export default Rect;
