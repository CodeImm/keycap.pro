'use client';

import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import dayjs from 'dayjs';
import { Control, Controller, FieldErrors, UseFormTrigger } from 'react-hook-form';

import { SetupProfileFormData } from './SetupProfileForm';

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [...Array(12).keys()].map((m) => dayjs().month(m).format('MMMM'));
const years = Array.from({ length: 124 }, (_, i) => new Date().getFullYear() - i);

interface Props {
  control: Control<SetupProfileFormData, any>;
  errors: FieldErrors<SetupProfileFormData>;
  trigger: UseFormTrigger<SetupProfileFormData>;
}

const DateSelector = ({ control, errors, trigger }: Props) => {
  return (
    <>
      <Box sx={{ display: 'inline-flex', gap: 4, width: '100%' }}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="day-label">День</InputLabel>
          <Controller
            name="dateOfBirth.day"
            control={control}
            render={({ field: { onChange, ...otherFieldProps }, formState: { isSubmitted } }) => (
              <Select
                {...otherFieldProps}
                onChange={(e) => {
                  onChange(e);
                  if (isSubmitted) {
                    trigger('dateOfBirth');
                  }
                }}
                labelId="day-label"
                label="День"
                error={!!errors.dateOfBirth?.day}
              >
                {days.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {errors.dateOfBirth?.day && (
            <FormHelperText error={!!errors.dateOfBirth?.day}>{errors.dateOfBirth?.day.message}</FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="month-label">Месяц</InputLabel>
          <Controller
            name="dateOfBirth.month"
            control={control}
            render={({ field: { onChange, ...otherFieldProps }, formState: { isSubmitted } }) => (
              <Select
                {...otherFieldProps}
                onChange={(e) => {
                  onChange(e);
                  if (isSubmitted) {
                    trigger('dateOfBirth');
                  }
                }}
                labelId="month-label"
                label="Месяц"
                error={!!errors.dateOfBirth?.month}
              >
                {months.map((month, index) => (
                  <MenuItem key={index} value={index}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {errors.dateOfBirth?.month && (
            <FormHelperText error={!!errors.dateOfBirth?.month}>{errors.dateOfBirth?.month.message}</FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="year-label">Год</InputLabel>
          <Controller
            name="dateOfBirth.year"
            control={control}
            render={({ field: { onChange, ...otherFieldProps }, formState: { isSubmitted } }) => (
              <Select
                {...otherFieldProps}
                onChange={(e) => {
                  onChange(e);
                  if (isSubmitted) {
                    trigger('dateOfBirth');
                  }
                }}
                labelId="year-label"
                label="Год"
                error={!!errors.dateOfBirth?.year}
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {errors.dateOfBirth?.year && (
            <FormHelperText error={!!errors.dateOfBirth}>{errors.dateOfBirth?.year.message}</FormHelperText>
          )}
        </FormControl>
      </Box>
      <FormHelperText error={!!errors.dateOfBirth?.root || !!errors.dateOfBirth}>
        {errors.dateOfBirth?.root?.message ?? errors.dateOfBirth?.message}
      </FormHelperText>
    </>
  );
};

export default DateSelector;
