import { LayoutProfiles, System } from '../model';

export const layoutProfiles: LayoutProfiles[] = [
  /** Windows */
  // English
  {
    id: 'us_qwerty',
    name: 'QWERTY',
    language: 'english',
    system: System.windows,
    emulated: true,
  },
  {
    id: 'dvorak',
    name: 'Dvorak',
    language: 'english',
    system: System.windows,
    emulated: true,
  },
  {
    id: 'colemak',
    name: 'Colemak',
    language: 'english',
    system: System.windows,
    emulated: true,
  },
  {
    id: 'workman',
    name: 'Workman',
    language: 'english',
    system: System.windows,
    emulated: true,
  },

  // Russian
  {
    id: 'jcuken',
    name: 'ЙЦУКЕН',
    language: 'russian',
    system: System.windows,
    emulated: true,
  },

  /** Linux */
  // English
  {
    id: 'us_qwerty',
    name: 'QWERTY',
    language: 'english',
    system: System.linux,
    emulated: true,
  },
  {
    id: 'dvorak',
    name: 'Dvorak',
    language: 'english',
    system: System.linux,
    emulated: true,
  },
  {
    id: 'colemak',
    name: 'Colemak',
    language: 'english',
    system: System.linux,
    emulated: true,
  },
  {
    id: 'workman',
    name: 'Workman',
    language: 'english',
    system: System.linux,
    emulated: true,
  },

  // Russian
  {
    id: 'jcuken',
    name: 'ЙЦУКЕН',
    language: 'russian',
    system: System.linux,
    emulated: true,
  },

  /** MacOS */
  // English
  {
    id: 'us_qwerty',
    name: 'QWERTY',
    language: 'english',
    system: System.macos,
    emulated: true,
  },
  {
    id: 'dvorak',
    name: 'Dvorak',
    language: 'english',
    system: System.macos,
    emulated: true,
  },
  {
    id: 'colemak',
    name: 'Colemak',
    language: 'english',
    system: System.macos,
    emulated: true,
  },
  {
    id: 'workman',
    name: 'Workman',
    language: 'english',
    system: System.macos,
    emulated: true,
  },

  // Russian
  {
    id: 'jcuken',
    name: 'Русская — ПК',
    language: 'russian',
    system: System.macos,
    emulated: true,
  },
];
