import { LayoutId, LayoutProfiles, System } from '../model/types';

export const layoutProfiles: LayoutProfiles[] = [
  /** Windows */
  // English
  {
    id: LayoutId.UsQwerty,
    name: 'QWERTY',
    language: 'english',
    system: System.windows,
    emulated: true,
  },
  {
    id: LayoutId.Dvorak,
    name: 'Dvorak',
    language: 'english',
    system: System.windows,
    emulated: true,
  },
  {
    id: LayoutId.Colemak,
    name: 'Colemak',
    language: 'english',
    system: System.windows,
    emulated: true,
  },
  {
    id: LayoutId.Workman,
    name: 'Workman',
    language: 'english',
    system: System.windows,
    emulated: true,
  },

  // Russian
  {
    id: LayoutId.Jcuken,
    name: 'ЙЦУКЕН',
    language: 'russian',
    system: System.windows,
    emulated: true,
  },

  /** Linux */
  // English
  {
    id: LayoutId.UsQwerty,
    name: 'QWERTY',
    language: 'english',
    system: System.linux,
    emulated: true,
  },
  {
    id: LayoutId.Dvorak,
    name: 'Dvorak',
    language: 'english',
    system: System.linux,
    emulated: true,
  },
  {
    id: LayoutId.Colemak,
    name: 'Colemak',
    language: 'english',
    system: System.linux,
    emulated: true,
  },
  {
    id: LayoutId.Workman,
    name: 'Workman',
    language: 'english',
    system: System.linux,
    emulated: true,
  },

  // Russian
  {
    id: LayoutId.Jcuken,
    name: 'ЙЦУКЕН',
    language: 'russian',
    system: System.linux,
    emulated: true,
  },

  /** MacOS */
  // English
  {
    id: LayoutId.UsQwerty,
    name: 'QWERTY',
    language: 'english',
    system: System.macos,
    emulated: true,
  },
  {
    id: LayoutId.Dvorak,
    name: 'Dvorak',
    language: 'english',
    system: System.macos,
    emulated: true,
  },
  {
    id: LayoutId.Colemak,
    name: 'Colemak',
    language: 'english',
    system: System.macos,
    emulated: true,
  },
  {
    id: LayoutId.Workman,
    name: 'Workman',
    language: 'english',
    system: System.macos,
    emulated: true,
  },

  // Russian
  {
    id: LayoutId.Jcuken,
    name: 'Русская — ПК',
    language: 'russian',
    system: System.macos,
    emulated: true,
  },
];
