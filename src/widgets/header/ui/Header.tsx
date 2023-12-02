import * as React from 'react';

import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { LocaleSwitcher } from '@/features/switch-locale';
import { Logo } from '@/shared/icons';
import { UserMenu } from '@/widgets/header/ui/userMenu';

import { Navigation } from './navigation';

export function Header() {
  // TODO: LocalSwitcher сделать без обертки div в --turbo
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo sx={{ mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              keycap.pro
            </Typography>
            <Navigation />
            <div>
              <LocaleSwitcher />
            </div>
            <UserMenu />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
