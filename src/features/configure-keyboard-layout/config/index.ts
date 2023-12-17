import type { LayoutLanguage, LayoutType } from '@/entities/keyboard';
import type { SelectOption } from '@/shared/components';

export const keyboardLayoutLanguageOptions: SelectOption<LayoutLanguage>[] = [
  { value: 'russian', label: 'Русский' },
  { value: 'english', label: 'English' },
];

export const keyboardLayoutTypeOptions: SelectOption<LayoutType>[] = [
  { value: 'iso', label: 'ISO' },
  { value: 'ansi', label: 'ANSI' },
];
