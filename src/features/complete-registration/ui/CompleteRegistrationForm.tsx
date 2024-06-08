'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, BoxProps, Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { TimeZone } from '@/entities/timeZone/model/types';
import { Gender } from '@/entities/user';
import dayjs from '@/shared/config/dayjs';

import DateSelector from './DateSelector';
import GenderRadioButtonGroup from './GenderRadioButtonGroup';
import TimezoneTextField from './TimezoneTextField';
import UsernameTextField from './UsernameTextField';

import api from '../api';
import { mapUserDataToApi } from '../api/mappers/mapUserDataToApi';
import { CompleteRegistrationFormSchema } from '../model/schema';

export type CompleteRegistrationFormData = z.infer<typeof CompleteRegistrationFormSchema>;

interface Props extends BoxProps<'form'> {
  defaultValues: CompleteRegistrationFormData;
  timeZones: TimeZone[];
}

const CompleteRegistrationForm = ({ defaultValues, timeZones, ...props }: Props) => {
  const defaultTimeZone = timeZones.find((timeZone) => timeZone.timeZone === dayjs.tz.guess()) ?? timeZones[0];

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors, isSubmitted },
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
      gender: Gender.Female,
      username: '',
      timeZone: `${defaultTimeZone.timeZone} (${defaultTimeZone.timeZoneName})`,
    },
    resolver: zodResolver(CompleteRegistrationFormSchema),
    mode: 'onChange',
  });

  const updateUserProfile = api.useUpdateUserProfile({
    onSuccess: () => {
      console.log('sucsess');
    },
  });

  const onSubmit = (data: CompleteRegistrationFormData) => {
    updateUserProfile.mutate(mapUserDataToApi(data));
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }} {...props}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            required
            fullWidth
            margin="normal"
            error={!!errors.email && isSubmitted}
            helperText={!!errors.email && isSubmitted ? errors.email.message : ''}
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
              error={!!errors.firstName && isSubmitted}
              helperText={errors.firstName && isSubmitted ? errors.firstName.message : ''}
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
              error={!!errors.lastName && isSubmitted}
              helperText={errors.lastName && isSubmitted ? errors.lastName.message : ''}
            />
          )}
        />
      </Box>

      <UsernameTextField control={control} errors={errors} />

      <TimezoneTextField
        control={control}
        errors={errors}
        options={timeZones.map((option) => `${option.timeZone} (${option.timeZoneName})`)}
      />

      <DateSelector control={control} errors={errors} trigger={trigger} />

      <GenderRadioButtonGroup control={control} />

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default CompleteRegistrationForm;
