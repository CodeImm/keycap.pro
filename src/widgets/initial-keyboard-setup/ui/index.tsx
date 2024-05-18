'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { KeyFingerMapping } from '@/entities/keyboard';
import { getKeyFingerMappingById } from '@/entities/keyboard/lib';
import { KeyFingerMappingForm } from '@/features/configure-finger-zones';
import { KeyboardLayoutConfigurationForm } from '@/features/configure-keyboard-layout';
import { StepControlPanel, StepperControls } from '@/shared/components';
import { useUpdateProfile } from '@/widgets/initial-keyboard-setup/hooks';

import { defaultKeyboardLayoutConfig } from '../config';

export function InitialKeyboardSetup() {
  const t = useTranslations('InitialKeyboardSetup');

  const { mutate } = useUpdateProfile();

  const [keyboardConfig, setKeyboardConfig] = useState({
    layoutConfig: defaultKeyboardLayoutConfig,
    keyFingerMapping: getKeyFingerMappingById('optimized'),
  });

  function handleConfigChange(data: any, property: keyof typeof keyboardConfig) {
    setKeyboardConfig((prev) => ({ ...prev, [property]: data }));
  }

  function handleSubmit(data: KeyFingerMapping) {
    mutate(
      {
        fingersZonesSchema: data,
        layout: keyboardConfig.layoutConfig,
      },
      {
        onError: (error) => {
          console.error('Ошибка при обновлении конфигурации клавиатуры:', error);
        },
        onSuccess: (response) => {
          if (response.success) {
            console.log('Профиль пользователя успешно обновлен:', response.data);
          } else {
            console.warn('Не удалось обновить профиль пользователя:', response.message);
          }
        },
      }
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
                layoutType={keyboardConfig.layoutConfig.layoutType}
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
