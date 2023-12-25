'use client';

import { useCallback, useState } from 'react';

import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
  Keyboard,
  LayoutId,
  LayoutLanguage,
  LayoutType,
} from '@/entities/keyboard';
import { Select } from '@/shared/components';

import {
  keyboardLayoutLanguageOptions,
  keyboardLayoutTypeOptions,
} from '../config';
import { getOptionsForLanguage } from '../lib';

type ValueOfLayoutLanguageOption =
  (typeof keyboardLayoutLanguageOptions)[number]['value'];
type ValueOfLayoutTypeOption =
  (typeof keyboardLayoutTypeOptions)[number]['value'];
type ValueOfLayoutIdOption = LayoutId;

interface IFormInput {
  layoutLanguage: ValueOfLayoutLanguageOption;
  layoutType: ValueOfLayoutTypeOption;
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
export function KeyboardLayoutConfigurationForm({
  defaultValues,
  actions,
}: Props) {
  const t = useTranslations('KeyboardConfigure');

  const [keyboardLayoutIdOptions, setKeyboardLayoutIdOptions] = useState(
    getOptionsForLanguage(defaultValues.layoutLanguage)
  );

  const [layoutConfig, setLayoutConfig] = useState<IFormInput>(defaultValues);

  const handleLayoutChange = useCallback(
    (name: keyof IFormInput, value: LayoutId | LayoutLanguage | LayoutType) => {
      setLayoutConfig((prev) => {
        const newConfig = { ...prev, [name]: value };

        if (name === 'layoutLanguage') {
          const layoutIdOptions = getOptionsForLanguage(
            value as LayoutLanguage
          );
          setKeyboardLayoutIdOptions(layoutIdOptions);
          newConfig.layoutId = layoutIdOptions[0].value;
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
          name="layoutLanguage"
          label={t('layoutLanguage')}
          value={layoutConfig.layoutLanguage}
          onChange={(e) =>
            handleLayoutChange(
              'layoutLanguage',
              e.target.value as LayoutLanguage
            )
          }
          options={keyboardLayoutLanguageOptions}
          size="small"
          sx={{ minWidth: '150px' }}
        />
        <Select
          name="layoutId"
          label={t('layoutId')}
          value={layoutConfig.layoutId}
          onChange={(e) =>
            handleLayoutChange('layoutId', e.target.value as LayoutId)
          }
          options={keyboardLayoutIdOptions}
          size="small"
          sx={{ minWidth: '150px' }}
        />
        <Select
          name="layoutType"
          label={t('layoutType')}
          value={layoutConfig.layoutType}
          onChange={(e) =>
            handleLayoutChange('layoutType', e.target.value as LayoutType)
          }
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
          layoutId={layoutConfig.layoutId}
          layoutType={layoutConfig.layoutType}
        />
      </Box>

      {actions({
        getValues: () => layoutConfig,
      })}
    </Box>
  );
}
