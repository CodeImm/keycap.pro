import {  LayoutLanguage } from '@/entities/keyboard';
import { System } from '@/entities/keyboard';
import type { SelectOption } from '@/shared/components';
import { KeyboardFormat } from '@/shared/types';

export const systemOptions: SelectOption<System>[] = [
  { value: System.Windows, label: 'Windows' },
  { value: System.Macos, label: 'MacOS' },
  { value: System.Linux, label: 'Linux' },
];

export const keyboardLayoutLanguageOptions: SelectOption<LayoutLanguage>[] = [
  { value: LayoutLanguage.Russian, label: 'Русский' },
  { value: LayoutLanguage.English, label: 'English' },
];

export const keyboardLayoutTypeOptions: SelectOption<KeyboardFormat>[] = [
  { value: KeyboardFormat.Iso, label: 'ISO' },
  { value: KeyboardFormat.Ansi, label: 'ANSI' },
];
