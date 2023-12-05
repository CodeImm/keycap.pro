'use client';

import Typography, { TypographyProps } from '@mui/material/Typography';

interface Props extends TypographyProps {
  userName?: string | null;
}

export function UserName({ userName }: Props) {
  return userName ? (
    <Typography variant="body1" component={'span'}>
      {userName}
    </Typography>
  ) : (
    ''
  );
}
