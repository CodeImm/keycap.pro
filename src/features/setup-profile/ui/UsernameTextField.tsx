'use client';

import { useDeferredValue, useEffect, useState } from 'react';

import { TextField } from '@mui/material';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import { CompleteRegistrationFormData } from './CompleteRegistrationForm';

import api from '../api';
import { UsernameSchema } from '../model/usernameSchema';

interface Props {
  control: Control<CompleteRegistrationFormData, any>;
  errors: FieldErrors<CompleteRegistrationFormData>;
}

const UsernameTextField = ({ control, errors }: Props) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const deferredValue = useDeferredValue(username);

  const { data, status } = api.useCheckUsernameUnique(username, {
    enabled: UsernameSchema.safeParse(deferredValue).success,
  });

  useEffect(() => {
    if (status === 'success' && data && !data.isUnique) {
      setError('Username is not unique');
    }

    if (status === 'success' && data && data.isUnique) {
      setError(null);
    }

    if (status === 'pending') {
      setError(null);
    }
  }, [data, setError, status]);

  return (
    <Controller
      name="username"
      control={control}
      render={({ field: { onChange, ...otherFieldProps } }) => (
        <TextField
          onChange={(e) => {
            onChange(e);
            setUsername(e.target.value);
          }}
          {...otherFieldProps}
          label="Username"
          fullWidth
          margin="normal"
          error={!!errors.username || !!error}
          helperText={errors.username?.message || error || (data?.isUnique ? 'This username is available.' : ' ')}
        />
      )}
    />
  );
};

export default UsernameTextField;
