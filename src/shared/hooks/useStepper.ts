import { useState } from 'react';

interface UseStepper {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
}

export function useStepper(): UseStepper {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return { activeStep, handleNext, handleBack };
}
