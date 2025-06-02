import Box, { BoxProps } from '@mui/material/Box';

interface SpaceDividerProps extends BoxProps<'svg'> {
  x: number;
  y: number;
  height?: number;
  width?: number;
  color?: string;
  dashArray?: number;
}

export default function SpaceDivider({
  x,
  y,
  height = 40,
  width = 2,
  color = "#47423e",
  dashArray = 4,
  ...props
}: SpaceDividerProps) {
  return (
    <Box component="svg" x={x} y={y} width={width} height={height} {...props}>
      <line x1={0} y1={0} x2={0} y2={height} stroke={color} strokeWidth={width} strokeDasharray={dashArray} />
    </Box>
  );
}
