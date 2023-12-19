import Box, { BoxProps } from '@mui/material/Box';

interface SpaceDividerProps extends BoxProps<'svg'> {
  x: number;
  y: number;
}

export default function SpaceDivider({ x, y, ...props }: SpaceDividerProps) {
  return (
    <Box component="svg" x={x} y={y} {...props}>
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="40"
        stroke="#47423e"
        strokeWidth="2"
        strokeDasharray="4"
      />
    </Box>
  );
}
