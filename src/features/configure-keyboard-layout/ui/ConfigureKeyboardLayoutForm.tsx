'use client';

import { useCallback, useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import { SubmitHandler, useForm } from 'react-hook-form';

import { LayoutId } from '@/entities/keyboard';
import { FormInputSelect } from '@/shared/components';

import {
  keyboardLayoutLanguageOptions,
  keyboardLayoutTypeOptions,
} from '../config';
import { getOptionsForLanguage } from '../libs/getOptionsForLanguage';

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

export function ConfigureKeyboardLayoutForm() {
  const t = useTranslations('KeyboardConfigure');

  const [keyboardLayoutOptions, setKeyboardLayoutOptions] = useState(
    getOptionsForLanguage(keyboardLayoutLanguageOptions[0].value)
  );

  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      layoutLanguage: keyboardLayoutLanguageOptions[0].value,
      layoutType: keyboardLayoutTypeOptions[0].value,
      layoutId: getOptionsForLanguage(keyboardLayoutLanguageOptions[0].value)[0]
        .value,
    },
  });
  const watchLayoutLanguage = watch('layoutLanguage');

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const onLanguageChange = useCallback(() => {
    setValue('layoutId', getOptionsForLanguage(watchLayoutLanguage)[0].value);

    setKeyboardLayoutOptions(getOptionsForLanguage(watchLayoutLanguage));
  }, [setValue, watchLayoutLanguage]);

  useEffect(() => {
    onLanguageChange();
  }, [onLanguageChange]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        marginTop: 8,
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        flex: 1,
      }}
    >
      <FormInputSelect
        name="layoutLanguage"
        label={t('layoutLanguage')}
        control={control}
        options={keyboardLayoutLanguageOptions}
        size="small"
        sx={{ minWidth: '150px' }}
      />
      <FormInputSelect
        name="layoutId"
        label={t('layoutId')}
        control={control}
        options={keyboardLayoutOptions}
        size="small"
        sx={{ minWidth: '150px' }}
      />
      <FormInputSelect
        name="layoutType"
        label={t('layoutType')}
        control={control}
        options={keyboardLayoutTypeOptions}
        size="small"
        sx={{ minWidth: '150px' }}
      />
      <input type="submit" />
    </Box>
  );
}
