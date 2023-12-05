'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { UserAvatar, UserName } from '@/entities/account';
import { SignOut } from '@/features/sign-out';

import { items } from '../config';

type Props = { userName?: string | null; userAvatarUrl?: string | null };

export function UserMenu({ userName, userAvatarUrl }: Props) {
  const t = useTranslations('Navigation');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', flexGrow: 0, gap: 1, ml: 2 }}
    >
      <UserName userName={userName} />
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <UserAvatar userName={userName} userAvatarUrl={userAvatarUrl} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((item) => (
          <MenuItem key={item.text} onClick={handleClose}>
            <Typography textAlign="center">{item.text}</Typography>
          </MenuItem>
        ))}

        <Divider />

        <SignOut>
          {({ onClick }) => (
            <MenuItem onClick={onClick}>
              <Typography textAlign="center">{t('signOut')}</Typography>
            </MenuItem>
          )}
        </SignOut>
      </Menu>
    </Box>
  );
}
