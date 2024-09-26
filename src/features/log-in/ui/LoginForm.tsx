import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { GithubSignIn } from './GithubSignIn';
import { GoogleSignIn } from './GoogleSignIn';

export function LoginForm() {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
        Sign in
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <GoogleSignIn />
        <GithubSignIn />
      </Box>
    </Box>
  );
}
