import Box, { BoxProps } from '@mui/material/Box';

import IsoEnterRightHandMark from './IsoEnterRightHandMark';
import Text from './Text';

interface Props extends BoxProps<'svg'> {
  id: string;
  x: number;
  y: number;
  height: number;
  width: number;
  label?: string;
  fill?: string;
  fontColor?: string;
  rightHandMark?: boolean;
}

function IsoEnter({
  id,
  x,
  y,
  height,
  width,
  label,
  fontColor = '#22211f',
  fill = '#e3e3e1',
  rightHandMark,
  ...props
}: Props) {
  return (
    <Box id={id} component="svg" x={x} y={y} {...props}>
      <Box component="path" d="m 0,0 0,40 7,0 0,42 53,0 0,-82 z" fill={fill} />
      <Text
        // x="50%"
        // y="50%"
        x={12}
        y={height / 2 + 2}
        dominantBaseline="middle"
        // textAnchor="middle"
        fill={fontColor}
        textRendering="optimizeLegibility"
        sx={{ fontSize: '11px', cursor: 'inherit', userSelect: 'none' }}
      >
        {label}
      </Text>
      {rightHandMark && <IsoEnterRightHandMark height={height} width={width} />}
    </Box>
  );
}

export default IsoEnter;
