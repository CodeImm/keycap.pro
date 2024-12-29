import { KeyboardFormat, LayoutLanguage } from '@/entities/keyboard';
import { System } from '@/entities/keyboard';
import type { SelectOption } from '@/shared/components';

export const systemOptions: SelectOption<System>[] = [
  { value: System.windows, label: 'Windows' },
  { value: System.macos, label: 'MacOS' },
  { value: System.linux, label: 'Linux' },
];

export const keyboardLayoutLanguageOptions: SelectOption<LayoutLanguage>[] = [
  { value: LayoutLanguage.Russian, label: 'Русский' },
  { value: LayoutLanguage.English, label: 'English' },
];

export const keyboardLayoutTypeOptions: SelectOption<KeyboardFormat>[] = [
  { value: KeyboardFormat.Iso, label: 'ISO' },
  { value: KeyboardFormat.Ansi, label: 'ANSI' },
];
