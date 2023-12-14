'use client';

import { ReactNode, useState } from 'react';

import { useTranslations } from 'next-intl';

import Button from '@mui/material/Button';

import { InitialKeyboardSetupStepper } from '@/entities/keyboard';
import { ConfigureKeyboardLayoutForm } from '@/features/configure-keyboard-layout';

import { keyboardLayoutDefaultConfig } from '../config';

interface Props {
  stepTitles: string[];
  stepComponents: ReactNode[];
}

export function InitialKeyboardSetup() {
  const t = useTranslations('InitialKeyboardSetup');

  const [keyboardLayoutConfig, setKeyboardLayoutConfig] = useState(
    keyboardLayoutDefaultConfig
  );

  function handleKeyboardLayoutConfigChange(data: any) {
    console.log({ data });
    setKeyboardLayoutConfig(data);
  }

  function handleSubmit() {
    console.log(keyboardLayoutConfig);
  }

  return (
    <InitialKeyboardSetupStepper
      title={t('title')}
      stepTitles={[t('step1'), t('step2')]}
    >
      {({ activeStep, handleNext, handleBack }) => (
        <>
          {activeStep === 0 && (
            <ConfigureKeyboardLayoutForm
              defaultValues={keyboardLayoutConfig}
              submitButtonText={t('continue')}
              onSubmit={(data) => {
                handleKeyboardLayoutConfigChange(data);
                handleNext();
              }}
            />
          )}
          {activeStep > 0 && (
            <>
              Step 2<Button onClick={handleBack}>{t('back')}</Button>
              <Button
                onClick={() => {
                  handleNext();
                  handleSubmit();
                }}
              >
                {t('submit')}
              </Button>
            </>
          )}
        </>
      )}
    </InitialKeyboardSetupStepper>
  );
}
