import Box, { BoxProps } from '@mui/material/Box';

interface Props extends BoxProps<'rect'> {}

export default function Rect({ ...props }: Props) {
  return <Box component="rect" {...props} />;
}
