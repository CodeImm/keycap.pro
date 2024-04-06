import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import type { SelectProps } from '@mui/material/Select';
import MuiSelect from '@mui/material/Select';

export interface SelectOption<T extends string> {
  value: T;
  label: string;
}

interface Props<T extends string> extends SelectProps {
  name: string;
  label: string;
  options: Array<SelectOption<T>>;
}

export const Select = <T extends string>({
  name,
  label,
  options,
  ...props
}: Props<T>) => {
  const menuItems = options.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ));

  return (
    <FormControl size="small">
      <InputLabel id={`${name}-label`} shrink={true}>
        {label}
      </InputLabel>

      <MuiSelect
        labelId={`${name}-label`}
        label={label}
        {...props}
        notched={true}
      >
        {menuItems}
      </MuiSelect>
    </FormControl>
  );
};
