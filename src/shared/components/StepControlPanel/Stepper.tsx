'use client';

import { ReactNode } from 'react';

import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import MuiStepper, { type StepperProps } from '@mui/material/Stepper';

interface Props extends StepperProps {
  activeStep: number;
  steps: string[];
}

export function Stepper({ activeStep, steps, sx, ...props }: Props) {
  return (
    <MuiStepper
      activeStep={activeStep}
      sx={{ display: 'flex', maxWidth: 'sm', alignItems: 'center', ...sx }}
      {...props}
    >
      {steps.map((label) => {
        const stepProps: { completed?: boolean } = {};
        const labelProps: {
          optional?: ReactNode;
        } = {};

        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        );
      })}
    </MuiStepper>
  );
}
