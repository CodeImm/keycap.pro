'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, BoxProps, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { TimeZone } from '@/entities/timeZone/model/types';
import dayjs from '@/shared/config/dayjs';

import DateSelector from './DateSelector';
import TimezoneTextField from './TimezoneTextField';
import UsernameTextField from './UsernameTextField';

import { CompleteRegistrationFormSchema } from '../model/schema';

export type CompleteRegistrationFormData = z.infer<typeof CompleteRegistrationFormSchema>;

interface Props extends BoxProps<'form'> {
  defaultValues: CompleteRegistrationFormData;
  timeZones: TimeZone[];
}

const CompleteRegistrationForm = ({ defaultValues, timeZones, ...props }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CompleteRegistrationFormData>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      dateOfBirth: {
        day: '',
        month: '',
        year: '',
      },
      gender: '',
      username: '',
      locale: '',
      timeZone: timeZones.find((timeZone) => timeZone.timeZone === dayjs.tz.guess())?.timeZone ?? '',
    },
    resolver: zodResolver(CompleteRegistrationFormSchema),
  });

  const onSubmit = (data) => {
    console.log('parse: ', CompleteRegistrationFormSchema.parse(data));
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }} {...props}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            required
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
          />
        )}
      />

      <Box sx={{ display: 'inline-flex', gap: 4, width: '100%' }}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="First Name"
              fullWidth
              margin="normal"
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ''}
            />
          )}
        />

        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Last Name"
              fullWidth
              margin="normal"
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName.message : ''}
            />
          )}
        />
      </Box>

      <UsernameTextField control={control} errors={errors} />

      <TimezoneTextField control={control} errors={errors} options={timeZones} />

      <DateSelector control={control} errors={errors} />

      <Controller
        name="gender"
        control={control}
        defaultValue=""
        rules={{ required: 'Gender required' }}
        render={({ field }) => (
          <FormControl fullWidth margin="normal">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select {...field} labelId="gender-label" label="Gender" error={!!errors.gender}>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      {/* ... */}
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default CompleteRegistrationForm;
