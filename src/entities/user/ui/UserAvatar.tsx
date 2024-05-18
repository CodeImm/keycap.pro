'use client';

import Avatar from '@mui/material/Avatar';

import { getLetterAvatar } from '../lib/getLetterAvatar';

type Props = { userName?: string | null; userAvatarUrl?: string | null };

export function UserAvatar({ userName, userAvatarUrl }: Props) {
  return userAvatarUrl ? (
    <Avatar alt={`Avatar of ${userName}`} src={userAvatarUrl} sx={{ width: 32, height: 32 }} />
  ) : (
    <Avatar alt={`Avatar of ${userName}`} sx={{ width: 32, height: 32 }}>
      {getLetterAvatar(userName)}
    </Avatar>
  );
}
