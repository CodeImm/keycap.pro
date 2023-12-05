import { Session } from 'next-auth';
import { getTranslations } from 'next-intl/server';

import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { LocaleSwitcher } from '@/features/switch-locale';
import { Logo } from '@/shared/icons';
import { AuthNavigation } from '@/widgets/header/ui/authNavigation';
import { UserMenu } from '@/widgets/header/ui/userMenu';

import { Navigation } from './navigation';

type Props = {
  session: Session | null;
};

export async function Header({ session }: Props) {
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
            {session ? (
              <UserMenu
                userName={session.user?.name}
                userAvatarUrl={session.user?.image}
              />
            ) : (
              <AuthNavigation />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
