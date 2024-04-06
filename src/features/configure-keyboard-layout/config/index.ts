import type { LayoutLanguage, LayoutType, System } from '@/entities/keyboard';
import type { SelectOption } from '@/shared/components';

export const systemOptions: SelectOption<System>[] = [
  { value: 'win_lin', label: 'Windows/Linux' },
  { value: 'macos', label: 'MacOS' },
];

export const keyboardLayoutLanguageOptions: SelectOption<LayoutLanguage>[] = [
  { value: 'russian', label: 'Русский' },
  { value: 'english', label: 'English' },
];

export const keyboardLayoutTypeOptions: SelectOption<LayoutType>[] = [
  { value: 'iso', label: 'ISO' },
  { value: 'ansi', label: 'ANSI' },
];
