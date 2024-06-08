'use client';

import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// interface Callback {
//   activeStep: number;
//   handleNext(): void;
//   handleBack(): void;
// }

type Props = {
  isFinalStep?: boolean;
  onNext(): void;
  onBack?(): void;
};

export function StepperControls({ isFinalStep = false, onBack, onNext }: Props) {
  const t = useTranslations('InitialKeyboardSetup');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
      {onBack && (
        <Button
          // color="inherit"
          disabled={!onBack}
          onClick={onBack}
          sx={{ mr: 1 }}
        >
          {t('back')}
        </Button>
      )}
      <Box sx={{ flex: '1 1 auto' }} />

      <Button onClick={onNext}>{isFinalStep ? t('submit') : t('continue')}</Button>
    </Box>
  );
}
