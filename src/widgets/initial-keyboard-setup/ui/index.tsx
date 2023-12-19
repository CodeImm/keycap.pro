'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import {
  KeyFingerMapping,
  keyFingerMapping as defaultKeyFingerMapping,
} from '@/entities/keyboard';
import { KeyFingerMappingForm } from '@/features/configure-finger-zones';
import { KeyboardLayoutConfigurationForm } from '@/features/configure-keyboard-layout';
import { StepControlPanel, StepperControls } from '@/shared/components';

import { keyboardLayoutDefaultConfig } from '../config';

export function InitialKeyboardSetup() {
  const t = useTranslations('InitialKeyboardSetup');

  const [keyboardConfig, setKeyboardConfig] = useState({
    layout: keyboardLayoutDefaultConfig,
    fingersZones: defaultKeyFingerMapping,
  });

  function handleConfigChange(
    data: any,
    property: keyof typeof keyboardConfig
  ) {
    setKeyboardConfig((prev) => ({ ...prev, [property]: data }));
  }

  function handleSubmit(data: KeyFingerMapping) {
    console.log({ fingersZonesSchema: data, layout: keyboardConfig.layout });

    throw Error('error');
  }

  return (
    <StepControlPanel title={t('title')} stepTitles={[t('step1'), t('step2')]}>
      {({ activeStep, handleNext, handleBack }) => (
        <>
          {activeStep === 0 && (
            <KeyboardLayoutConfigurationForm
              defaultValues={keyboardConfig.layout}
              submitButtonText={t('continue')}
              actions={({ getValues }) => (
                <StepperControls
                  onNext={() => {
                    handleConfigChange(getValues(), 'layout');
                    handleNext();
                  }}
                />
              )}
            />
          )}
          {activeStep > 0 && (
            <>
              <KeyFingerMappingForm
                defaultValues={keyboardConfig.fingersZones}
                layoutId={keyboardConfig.layout.layoutId}
                layoutType={keyboardConfig.layout.layoutType}
                actions={({ getValues }) => (
                  <StepperControls
                    isFinalStep={true}
                    onBack={() => {
                      handleConfigChange(getValues(), 'fingersZones');
                      handleBack();
                    }}
                    onNext={() => {
                      handleNext();
                      try {
                        handleSubmit(getValues());
                      } catch (err) {
                        console.log('f', err);
                        handleBack();
                      }
                    }}
                  />
                )}
              />
            </>
          )}
        </>
      )}
    </StepControlPanel>
  );
}
