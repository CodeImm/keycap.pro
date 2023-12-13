export const layoutLanguages = ['english', 'russian'] as const;
export type LayoutLanguage = (typeof layoutLanguages)[number];

export const layoutIds = [
  'us_qwerty',
  'dvorak',
  'colemak',
  'workman',
  'jcuken',
] as const;
export type LayoutId = (typeof layoutIds)[number];

export const layoutTypes = ['iso', 'ansi'] as const;
export type LayoutType = (typeof layoutTypes)[number];

type Layout = {
  id: LayoutId;
  name: string;
  language: LayoutLanguage;
  emulated: boolean;
};

export const layouts: Layout[] = [
  // English
  {
    id: 'us_qwerty',
    name: 'QWERTY',
    language: 'english',
    emulated: true,
  },
  {
    id: 'dvorak',
    name: 'Dvorak',
    language: 'english',
    emulated: true,
  },
  {
    id: 'colemak',
    name: 'Colemak',
    language: 'english',
    emulated: true,
  },
  {
    id: 'workman',
    name: 'Workman',
    language: 'english',
    emulated: true,
  },

  // Russian
  {
    id: 'jcuken',
    name: 'ЙЦУКЕН',
    language: 'russian',
    emulated: true,
  },
];
