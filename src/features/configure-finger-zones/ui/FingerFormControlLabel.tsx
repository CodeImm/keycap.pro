import FormControlLabel, {
  type FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import { useRadioGroup } from '@mui/material/RadioGroup';

const FingerFormControlLabel = ({
  sx,
  ...props
}: FormControlLabelProps): JSX.Element => {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }
  return (
    <FormControlLabel
      sx={{
        border: '1px solid',
        borderColor: 'transparent',
        borderRadius: 1,
        p: 0.5,
        paddingRight: 2,
        ...(checked && {
          borderColor: '#bbbbbb',
          '.MuiFormControlLabel-label': {
            fontWeight: 500,
          },
        }),
        '&:hover': {
          backgroundColor: checked ? 'inherit' : 'rgba(11, 114, 185, 0.04)',
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default FingerFormControlLabel;
