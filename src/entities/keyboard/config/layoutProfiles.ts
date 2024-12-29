import { LayoutId, LayoutLanguage, LayoutProfiles, System } from '../model/types';

export const layoutProfiles: LayoutProfiles[] = [
  /** Windows */
  // English
  {
    id: LayoutId.UsQwerty,
    name: 'QWERTY',
    language: LayoutLanguage.English,
    system: System.windows,
    emulated: true,
  },
  {
    id: LayoutId.Dvorak,
    name: 'Dvorak',
    language: LayoutLanguage.English,
    system: System.windows,
    emulated: true,
  },
  {
    id: LayoutId.Colemak,
    name: 'Colemak',
    language: LayoutLanguage.English,
    system: System.windows,
    emulated: true,
  },
  {
    id: LayoutId.Workman,
    name: 'Workman',
    language: LayoutLanguage.English,
    system: System.windows,
    emulated: true,
  },

  // Russian
  {
    id: LayoutId.Jcuken,
    name: 'ЙЦУКЕН',
    language: LayoutLanguage.Russian,
    system: System.windows,
    emulated: true,
  },

  /** Linux */
  // English
  {
    id: LayoutId.UsQwerty,
    name: 'QWERTY',
    language: LayoutLanguage.English,
    system: System.linux,
    emulated: true,
  },
  {
    id: LayoutId.Dvorak,
    name: 'Dvorak',
    language: LayoutLanguage.English,
    system: System.linux,
    emulated: true,
  },
  {
    id: LayoutId.Colemak,
    name: 'Colemak',
    language: LayoutLanguage.English,
    system: System.linux,
    emulated: true,
  },
  {
    id: LayoutId.Workman,
    name: 'Workman',
    language: LayoutLanguage.English,
    system: System.linux,
    emulated: true,
  },

  // Russian
  {
    id: LayoutId.Jcuken,
    name: 'ЙЦУКЕН',
    language: LayoutLanguage.Russian,
    system: System.linux,
    emulated: true,
  },

  /** MacOS */
  // English
  {
    id: LayoutId.UsQwerty,
    name: 'QWERTY',
    language: LayoutLanguage.English,
    system: System.macos,
    emulated: true,
  },
  {
    id: LayoutId.Dvorak,
    name: 'Dvorak',
    language: LayoutLanguage.English,
    system: System.macos,
    emulated: true,
  },
  {
    id: LayoutId.Colemak,
    name: 'Colemak',
    language: LayoutLanguage.English,
    system: System.macos,
    emulated: true,
  },
  {
    id: LayoutId.Workman,
    name: 'Workman',
    language: LayoutLanguage.English,
    system: System.macos,
    emulated: true,
  },

  // Russian
  {
    id: LayoutId.Jcuken,
    name: 'Русская — ПК',
    language: LayoutLanguage.Russian,
    system: System.macos,
    emulated: true,
  },
];
