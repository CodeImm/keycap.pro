import Box, { BoxProps } from '@mui/material/Box';

interface Props extends BoxProps<'text'> {}

export default function Text({ ...props }: Props) {
  return <Box component="text" {...props} />;
}
