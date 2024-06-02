'use client';

import { FormControl, InputLabel, Select } from '@mui/material';
import { Controller } from 'react-hook-form';

interface Props {
  control: any;
  errors: any;
}

const TimezoneTextField = ({ control, errors, ...props }: Props) => {
  return (
    <Controller
      name="timeZone"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl fullWidth margin="normal">
          <InputLabel id="time-zone-label">Time Zone</InputLabel>
          <Select {...field} labelId="time-zone-label" label="Time Zone" error={!!errors.timeZone}>
            {/* <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem> */}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default TimezoneTextField;
