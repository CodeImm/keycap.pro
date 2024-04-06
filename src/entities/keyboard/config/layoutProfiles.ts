import { LayoutProfiles } from '../model';

export const layoutProfiles: LayoutProfiles[] = [
  /** Windows/Linux */
  // English
  {
    id: 'us_qwerty',
    name: 'QWERTY',
    language: 'english',
    system: 'win_lin',
    emulated: true,
  },
  {
    id: 'dvorak',
    name: 'Dvorak',
    language: 'english',
    system: 'win_lin',
    emulated: true,
  },
  {
    id: 'colemak',
    name: 'Colemak',
    language: 'english',
    system: 'win_lin',
    emulated: true,
  },
  {
    id: 'workman',
    name: 'Workman',
    language: 'english',
    system: 'win_lin',
    emulated: true,
  },

  // Russian
  {
    id: 'jcuken',
    name: 'ЙЦУКЕН',
    language: 'russian',
    system: 'win_lin',
    emulated: true,
  },

  /** MacOS */
  // English
  {
    id: 'us_qwerty',
    name: 'QWERTY',
    language: 'english',
    system: 'macos',
    emulated: true,
  },
  {
    id: 'dvorak',
    name: 'Dvorak',
    language: 'english',
    system: 'macos',
    emulated: true,
  },
  {
    id: 'colemak',
    name: 'Colemak',
    language: 'english',
    system: 'macos',
    emulated: true,
  },
  {
    id: 'workman',
    name: 'Workman',
    language: 'english',
    system: 'macos',
    emulated: true,
  },

  // Russian
  {
    id: 'jcuken',
    name: 'Русская — ПК',
    language: 'russian',
    system: 'macos',
    emulated: true,
  },
];
