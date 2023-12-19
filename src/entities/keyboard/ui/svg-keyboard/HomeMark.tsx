import { BoxProps } from '@mui/material/Box';

import Rect from './Rect';

interface Props extends BoxProps<'rect'> {}

export default function HomeMark({ ...props }: Props) {
  return (
    <Rect
      //   rx={2}
      ry={2}
      x={15}
      y={35}
      width={10}
      height={2.5}
      fill={'#cccccc'}
      {...props}
    />
  );
}
