'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { getKeyFingerMappingById } from '@/entities/keyboard/lib';
import { KeyFingerMappingForm } from '@/features/configure-finger-zones';
import { KeyboardLayoutConfigurationForm } from '@/features/configure-keyboard-layout';
import { StepControlPanel, StepperControls } from '@/shared/components';
import { useRouter } from '@/shared/navigation';
import { KeyFingerMapping } from '@/shared/types';

import api from '../api';
import { mapKeyboardSetupToApi } from '../api/mappers/mapKeyboardSetupToApi';
import { defaultKeyboardLayoutConfig } from '../config';

export interface InitialKeyboardSetupFormData {}

export function InitialKeyboardSetup() {
  const t = useTranslations('InitialKeyboardSetup');

  const router = useRouter();

  const [keyboardConfig, setKeyboardConfig] = useState({
    layoutConfig: defaultKeyboardLayoutConfig,
    keyFingerMapping: getKeyFingerMappingById('optimized'),
  });

  function handleConfigChange(data: any, property: keyof typeof keyboardConfig) {
    setKeyboardConfig((prev) => ({ ...prev, [property]: data }));
  }

  const { mutate } = api.useSaveKeyboardConfiguration({
    onSuccess: () => {
      router.refresh();
    },
  });

  function handleSubmit(data: KeyFingerMapping) {
    console.log({
      keyFingerMappingSchema: data,
      layout: keyboardConfig.layoutConfig,
    });
    mutate(
      mapKeyboardSetupToApi({
        keyFingerMappingSchema: data,
        keyboardConfiguration: keyboardConfig,
      })
    );
  }

  return (
    <StepControlPanel title={t('title')} stepTitles={[t('step1'), t('step2')]}>
      {({ activeStep, handleNext, handleBack }) => (
        <>
          {activeStep === 0 && (
            <KeyboardLayoutConfigurationForm
              defaultValues={keyboardConfig.layoutConfig}
              actions={({ getValues }) => (
                <StepperControls
                  onNext={() => {
                    handleConfigChange(getValues(), 'layoutConfig');
                    handleNext();
                  }}
                />
              )}
            />
          )}
          {activeStep > 0 && (
            <>
              <KeyFingerMappingForm
                system={keyboardConfig.layoutConfig.system}
                defaultValues={keyboardConfig.keyFingerMapping}
                layoutId={keyboardConfig.layoutConfig.layoutId}
                keyboardFormat={keyboardConfig.layoutConfig.keyboardFormat}
                actions={({ getValues }) => (
                  <StepperControls
                    isFinalStep={true}
                    onBack={() => {
                      handleConfigChange(getValues(), 'keyFingerMapping');
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
