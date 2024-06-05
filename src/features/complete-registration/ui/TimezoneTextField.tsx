'use client';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import { TimeZone } from '@/entities/timeZone/model/types';

import { CompleteRegistrationFormData } from './CompleteRegistrationForm';

interface Props {
  control: Control<CompleteRegistrationFormData, any>;
  errors: FieldErrors<CompleteRegistrationFormData>;
  options: TimeZone[];
}

const TimezoneTextField = ({ control, errors, options, ...props }: Props) => {
  //TODO: автокомплит, виртуализация опций
  return (
    <Controller
      name="timeZone"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl fullWidth margin="normal">
          <InputLabel id="time-zone-label">Time Zone</InputLabel>
          <Select {...field} labelId="time-zone-label" label="Time Zone" error={!!errors.timeZone}>
            {options.map((option) => (
              <MenuItem key={option.timeZone} value={option.timeZone}>
                ({option.timeZoneName}) {option.timeZone}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default TimezoneTextField;
