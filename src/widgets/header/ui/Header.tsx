'use server';

import { getTranslations } from 'next-intl/server';

import { Box, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { User } from 'lucia';

import { SignOut, SignOutButton } from '@/features/sign-out';
import { LocaleSwitcher } from '@/features/switch-locale';
import { Logo } from '@/shared/icons';
import { AuthNavigation } from '@/widgets/header/ui/authNavigation';
import { UserMenu } from '@/widgets/header/ui/userMenu';

import { Navigation } from './navigation';

type Props = {
  user: User | null;
};

export async function Header({ user }: Props) {
  // const t = await getTranslations('Navigation');
  const t = await getTranslations('Navigation');

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
            {user ? (
              <>
                <UserMenu userName={user?.firstName} userAvatarUrl={user?.imageURL} />
                <SignOutButton />
              </>
            ) : (
              <AuthNavigation />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
