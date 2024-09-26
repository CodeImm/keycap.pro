import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Control, Controller } from 'react-hook-form';

import { Gender } from '@/entities/user';

import { SetupProfileFormData } from './SetupProfileForm';

interface Props {
  control: Control<SetupProfileFormData, any>;
}

export default function GenderRadioButtonGroup({ control }: Props) {
  return (
    <Controller
      name="gender"
      control={control}
      render={({ field }) => (
        <FormControl>
          <FormLabel id="gender-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup aria-labelledby="gender-radio-buttons-group-label" {...field} row>
            <FormControlLabel value={Gender.Female} control={<Radio />} label="Female" />
            <FormControlLabel value={Gender.Male} control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      )}
    />
  );
}
