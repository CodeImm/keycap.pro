import { KeyboardLayoutId } from '@/shared/types';
import { LayoutLanguage, LayoutProfiles, System } from '../model/types';

export const layoutProfiles: LayoutProfiles[] = [
  /** Windows */
  // English
  {
    id: KeyboardLayoutId.UsQwerty,
    name: 'QWERTY',
    language: LayoutLanguage.English,
    system: System.Windows,
    emulated: true,
  },
  {
    id: KeyboardLayoutId.Dvorak,
    name: 'Dvorak',
    language: LayoutLanguage.English,
    system: System.Windows,
    emulated: true,
  },
  {
    id: KeyboardLayoutId.Colemak,
    name: 'Colemak',
    language: LayoutLanguage.English,
    system: System.Windows,
    emulated: true,
  },
  {
    id: KeyboardLayoutId.Workman,
    name: 'Workman',
    language: LayoutLanguage.English,
    system: System.Windows,
    emulated: true,
  },

  // Russian
  {
    id: KeyboardLayoutId.Jcuken,
    name: 'ЙЦУКЕН',
    language: LayoutLanguage.Russian,
    system: System.Windows,
    emulated: true,
  },

  /** Linux */
  // English
  {
    id: KeyboardLayoutId.UsQwerty,
    name: 'QWERTY',
    language: LayoutLanguage.English,
    system: System.Linux,
    emulated: true,
  },
  {
    id: KeyboardLayoutId.Dvorak,
    name: 'Dvorak',
    language: LayoutLanguage.English,
    system: System.Linux,
    emulated: true,
  },
  {
    id: KeyboardLayoutId.Colemak,
    name: 'Colemak',
    language: LayoutLanguage.English,
    system: System.Linux,
    emulated: true,
  },
  {
    id: KeyboardLayoutId.Workman,
    name: 'Workman',
    language: LayoutLanguage.English,
    system: System.Linux,
    emulated: true,
  },

  // Russian
  {
    id: KeyboardLayoutId.Jcuken,
    name: 'ЙЦУКЕН',
    language: LayoutLanguage.Russian,
    system: System.Linux,
    emulated: true,
  },

  /** MacOS */
  // English
  {
    id: KeyboardLayoutId.UsQwerty,
    name: 'QWERTY',
    language: LayoutLanguage.English,
    system: System.Macos,
    emulated: true,
  },
  {
    id: KeyboardLayoutId.Dvorak,
    name: 'Dvorak',
    language: LayoutLanguage.English,
    system: System.Macos,
    emulated: true,
  },
  {
    id: KeyboardLayoutId.Colemak,
    name: 'Colemak',
    language: LayoutLanguage.English,
    system: System.Macos,
    emulated: true,
  },
  {
    id: KeyboardLayoutId.Workman,
    name: 'Workman',
    language: LayoutLanguage.English,
    system: System.Macos,
    emulated: true,
  },

  // Russian
  {
    id: KeyboardLayoutId.Jcuken,
    name: 'Русская — ПК',
    language: LayoutLanguage.Russian,
    system: System.Macos,
    emulated: true,
  },
];
