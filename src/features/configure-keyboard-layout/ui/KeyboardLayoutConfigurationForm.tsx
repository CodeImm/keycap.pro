'use client';

import { useCallback, useState } from 'react';

import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Keyboard, KeyboardFormat, LayoutId, LayoutLanguage, System } from '@/entities/keyboard';
import { Select } from '@/shared/components';

import { keyboardLayoutLanguageOptions, keyboardLayoutTypeOptions, systemOptions } from '../config';
import { getDefaultLayoutConfig, getLayoutIdOptions } from '../lib';

type ValueOfLayoutLanguageOption = (typeof keyboardLayoutLanguageOptions)[number]['value'];
type ValueOfLayoutTypeOption = (typeof keyboardLayoutTypeOptions)[number]['value'];
type ValueOfLayoutIdOption = LayoutId;

interface IFormInput {
  system: System;
  layoutLanguage: ValueOfLayoutLanguageOption;
  keyboardFormat: ValueOfLayoutTypeOption;
  layoutId: ValueOfLayoutIdOption;
}
interface CallbackActions {
  getValues(): IFormInput;
}

interface Props {
  defaultValues: IFormInput;
  actions({ getValues }: CallbackActions): JSX.Element;
}
//TODO: submitButtonText по умолчанию с t
export function KeyboardLayoutConfigurationForm({ defaultValues, actions }: Props) {
  const t = useTranslations('KeyboardConfigure');

  const [keyboardLayoutIdOptions, setKeyboardLayoutIdOptions] = useState(
    getLayoutIdOptions(defaultValues.system, defaultValues.layoutLanguage)!
  );

  const [layoutConfig, setLayoutConfig] = useState<IFormInput>(defaultValues);

  const handleLayoutChange = useCallback(
    (name: keyof IFormInput, value: System | LayoutId | LayoutLanguage | KeyboardFormat) => {
      setLayoutConfig((prev) => {
        const newConfig = { ...prev, [name]: value };

        if (name === 'system' || name === 'layoutLanguage') {
          const layoutIdOptions = getLayoutIdOptions(newConfig.system, newConfig.layoutLanguage);

          if (layoutIdOptions) {
            setKeyboardLayoutIdOptions(layoutIdOptions);
            newConfig.layoutId = layoutIdOptions[0].value;
          } else {
            const [system, layoutLanguage, layoutId] = getDefaultLayoutConfig(newConfig.system);

            const layoutIdOptions = getLayoutIdOptions(system, layoutLanguage)!;

            setKeyboardLayoutIdOptions(layoutIdOptions);

            newConfig.layoutLanguage = layoutLanguage;
            newConfig.layoutId = layoutId;
          }
        }

        return newConfig;
      });
    },
    []
  );

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        flex: 1,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Select
          name="system"
          label={t('system')}
          value={layoutConfig.system}
          onChange={(e) => handleLayoutChange('system', e.target.value as System)}
          options={systemOptions}
          size="small"
          sx={{ minWidth: '150px' }}
        />
        <Select
          name="layoutLanguage"
          label={t('layoutLanguage')}
          value={layoutConfig.layoutLanguage}
          onChange={(e) => handleLayoutChange('layoutLanguage', e.target.value as LayoutLanguage)}
          options={keyboardLayoutLanguageOptions}
          size="small"
          sx={{ minWidth: '150px' }}
        />
        <Select
          name="layoutId"
          label={t('layoutId')}
          value={layoutConfig.layoutId}
          onChange={(e) => handleLayoutChange('layoutId', e.target.value as LayoutId)}
          options={keyboardLayoutIdOptions}
          size="small"
          sx={{ minWidth: '150px' }}
        />
        <Select
          name="keyboardFormat"
          label={t('keyboardFormat')}
          value={layoutConfig.keyboardFormat}
          onChange={(e) => handleLayoutChange('keyboardFormat', e.target.value as KeyboardFormat)}
          options={keyboardLayoutTypeOptions}
          size="small"
          sx={{ minWidth: '150px' }}
        />
      </Box>

      <Box
        sx={{
          px: '10%',
        }}
      >
        <Typography>Preview</Typography>
        <Keyboard
          system={layoutConfig.system}
          layoutId={layoutConfig.layoutId}
          keyboardFormat={layoutConfig.keyboardFormat}
        />
      </Box>

      {actions({
        getValues: () => layoutConfig,
      })}
    </Box>
  );
}
