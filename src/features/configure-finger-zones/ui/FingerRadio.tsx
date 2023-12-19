import Box from '@mui/material/Box';
import Radio, { type RadioProps } from '@mui/material/Radio';

interface FingerRadioProps extends Omit<RadioProps, 'color'> {
  color: string;
}

const FingerRadio = ({ color, ...props }: FingerRadioProps): JSX.Element => {
  return (
    <Radio
      disableRipple
      icon={
        <Box
          component="span"
          sx={{
            width: 16,
            height: 16,
            backgroundColor: color,
            '&:hover': {
              backgroundColor: 'rgba(11, 114, 185, 0.04)',
            },
          }}
        />
      }
      checkedIcon={
        <Box
          component="span"
          sx={{
            width: 16,
            height: 16,
            backgroundColor: color,
          }}
        />
      }
      sx={{
        '&:hover': {
          backgroundColor: 'initial',
        },
      }}
      {...props}
    />
  );
};

export default FingerRadio;
