'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Stepper } from '@/shared/components';
import { useStepper } from '@/shared/hooks';

interface Callback {
  activeStep: number;
  handleNext(): void;
  handleBack(): void;
}

type Props = {
  children({ activeStep, handleNext, handleBack }: Callback): JSX.Element;
  title: string;
  stepTitles: string[];
};

export function InitialKeyboardSetupStepper({
  children,
  title,
  stepTitles,
}: Props) {
  const { activeStep, handleNext, handleBack } = useStepper();

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 4,
          gap: 6,
        }}
      >
        <Typography variant="h5" component="h2" sx={{ width: '100%' }}>
          {title}
        </Typography>
        <Stepper
          activeStep={activeStep}
          steps={stepTitles}
          sx={{ width: '100%' }}
        />
      </Box>

      <>
        {children({
          activeStep,
          handleNext,
          handleBack,
        })}
      </>
    </Box>
  );
}
