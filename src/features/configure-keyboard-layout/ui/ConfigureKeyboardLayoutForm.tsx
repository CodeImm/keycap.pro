'use client';

import { useCallback, useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import { Button, Typography } from '@mui/material';
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

interface Props {
  submitButtonText: string;
  defaultValues: IFormInput;
  onSubmit: (data: IFormInput) => void;
}
//TODO: submitButtonText по умолчанию с t
export function ConfigureKeyboardLayoutForm({
  submitButtonText,
  defaultValues,
  onSubmit,
}: Props) {
  const t = useTranslations('KeyboardConfigure');

  const [keyboardLayoutOptions, setKeyboardLayoutOptions] = useState(
    getOptionsForLanguage(defaultValues.layoutLanguage)
  );

  const { control, handleSubmit, watch, setValue, reset } = useForm<IFormInput>(
    {
      defaultValues,
    }
  );
  const watchLayoutLanguage = watch('layoutLanguage');

  const _onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    onSubmit(data);
  };

  const onLanguageChange = useCallback(() => {
    setValue('layoutId', getOptionsForLanguage(watchLayoutLanguage)[0].value);

    setKeyboardLayoutOptions(getOptionsForLanguage(watchLayoutLanguage));
  }, [setValue, watchLayoutLanguage]);

  useEffect(() => {
    onLanguageChange();
  }, [onLanguageChange]);

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

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
      </Box>

      <Typography>Preview</Typography>

      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Box sx={{ flex: '1 1 auto' }} />

        <Button onClick={handleSubmit(_onSubmit)}>{submitButtonText}</Button>
      </Box>
    </Box>
  );
}
