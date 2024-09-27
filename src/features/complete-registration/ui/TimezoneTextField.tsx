'use client';

import { useState } from 'react';

import { Autocomplete, TextField } from '@mui/material';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import { CompleteRegistrationFormData } from './CompleteRegistrationForm';

interface Props {
  control: Control<CompleteRegistrationFormData, any>;
  errors: FieldErrors<CompleteRegistrationFormData>;
  options: string[];
}

const TimezoneTextField = ({ control, errors, options }: Props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Controller
      name="timeZone"
      control={control}
      render={({ field: { value, onChange, ...otherFieldProps } }) => (
        <Autocomplete
          value={value}
          onChange={(event: any, newValue: string | null) => {
            onChange(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(_event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          disableClearable
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Time Zone" error={!!errors.timeZone} />}
          {...otherFieldProps}
        />
      )}
    />
  );
};

export default TimezoneTextField;
