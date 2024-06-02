'use client';

import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

interface Props {
  control: any;
  errors: any;
}

const UsernameTextField = ({ control, errors, ...props }: Props) => {
  return (
    <Controller
      name="username"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Username"
          fullWidth
          margin="normal"
          error={!!errors.username}
          helperText={errors.username ? errors.username.message : ''}
        />
      )}
    />
  );
};

export default UsernameTextField;
