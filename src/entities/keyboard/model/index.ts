export type LayoutKeyId =
  | 'Backquote'
  | 'Digit1'
  | 'Digit2'
  | 'Digit3'
  | 'Digit4'
  | 'Digit5'
  | 'Digit6'
  | 'Digit7'
  | 'Digit8'
  | 'Digit9'
  | 'Digit0'
  | 'Minus'
  | 'Equal'
  | 'Backspace'
  | 'Tab'
  | 'KeyQ'
  | 'KeyW'
  | 'KeyE'
  | 'KeyR'
  | 'KeyT'
  | 'KeyY'
  | 'KeyU'
  | 'KeyI'
  | 'KeyO'
  | 'KeyP'
  | 'BracketLeft'
  | 'BracketRight'
  | 'Backslash'
  | 'CapsLock'
  | 'KeyA'
  | 'KeyS'
  | 'KeyD'
  | 'KeyF'
  | 'KeyG'
  | 'KeyH'
  | 'KeyJ'
  | 'KeyK'
  | 'KeyL'
  | 'Semicolon'
  | 'Quote'
  | 'Enter'
  | 'ShiftLeft'
  | 'IntlBackslash'
  | 'KeyZ'
  | 'KeyX'
  | 'KeyC'
  | 'KeyV'
  | 'KeyB'
  | 'KeyN'
  | 'KeyM'
  | 'Comma'
  | 'Period'
  | 'Slash'
  | 'ShiftRight'
  | 'ControlLeft'
  | 'MetaLeft'
  | 'Fn'
  | 'AltLeft'
  | 'Space'
  | 'AltRight'
  | 'MetaRight'
  | 'ContextMenu'
  | 'ControlRight';

export type LayoutKeyType = 'letter' | 'symbol' | 'sys' | 'digit';

export type LayoutKeyInfo = {
  [key in LayoutKeyId]?: {
    key: string;
    type: LayoutKeyType;
    alternate?: LayoutKeyId;
  };
};

export type ShiftState = 'shift' | 'default';

export type Layout = { [key in ShiftState]: LayoutKeyInfo };

export type VirtualKeyboardRowName = 'row1' | 'row2' | 'row3' | 'row4' | 'row5';
export type VirtualKeyboardLayout = {
  [key in VirtualKeyboardRowName]: {
    id: LayoutKeyId;
    width: number;
  }[];
};

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

type LayoutProfiles = {
  id: LayoutId;
  name: string;
  language: LayoutLanguage;
  emulated: boolean;
};

export const layoutProfiles: LayoutProfiles[] = [
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
