'use client';

import { useCallback, useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';

import { Keyboard, LayoutId } from '@/entities/keyboard';
import { FormInputSelect } from '@/shared/components';

import {
  keyboardLayoutLanguageOptions,
  keyboardLayoutTypeOptions,
} from '../config';
import { getOptionsForLanguage } from '../libs';

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
  submitButtonText: string;
  defaultValues: IFormInput;
  actions({ getValues }: CallbackActions): JSX.Element;
}
//TODO: submitButtonText по умолчанию с t
export function ConfigureKeyboardLayoutForm({ defaultValues, actions }: Props) {
  const t = useTranslations('KeyboardConfigure');

  const [keyboardLayoutOptions, setKeyboardLayoutOptions] = useState(
    getOptionsForLanguage(defaultValues.layoutLanguage)
  );

  const { control, getValues, watch, setValue, reset } = useForm<IFormInput>({
    defaultValues,
  });
  const watchLayoutLanguage = watch('layoutLanguage');
  const watchLayoutType = watch('layoutType');
  const watchLayoutId = watch('layoutId');

  // const _onSubmit: SubmitHandler<IFormInput> = (data) => {
  //   console.log(data);
  //   return data;
  // };

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

      <Box
        sx={{
          px: '10%',
        }}
      >
        <Typography>Preview</Typography>
        <Keyboard layoutId={watchLayoutId} layoutType={watchLayoutType} />
      </Box>

      {actions({
        getValues: () => getValues(),
      })}
    </Box>
  );
}
