import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectProps } from '@mui/material/Select';
import { type Control, Controller } from 'react-hook-form';

export interface SelectOption<T extends string> {
  value: T;
  label: string;
}

interface FormInputProps<T extends string> extends SelectProps {
  name: string;
  control: Control<any>;
  label: string;
  options: Array<SelectOption<T>>;
}

export const FormInputSelect = <T extends string>({
  name,
  control,
  label,
  options,
  ...props
}: FormInputProps<T>) => {
  const menuItems = options.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ));
  // TODO: выносить ли menuItems на уровень выше?
  return (
    <FormControl size="small">
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select {...field} labelId={`${name}-label`} label={label} {...props}>
            {menuItems}
          </Select>
        )}
      />
    </FormControl>
  );
};
