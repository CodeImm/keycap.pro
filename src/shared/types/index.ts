export enum Finger {
  LEFT_PINKIE,
  LEFT_RING,
  LEFT_MIDDLE,
  LEFT_INDEX,
  LEFT_THUMB,
  RIGHT_THUMB,
  RIGHT_INDEX,
  RIGHT_MIDDLE,
  RIGHT_RING,
  RIGHT_PINKIE,
}

export enum KeyModifier {
  DEFAULT = 'default', // Обычное состояние клавиши (без модификаторов)
  SHIFT = 'shift', // С зажатым Shift
  ALT = 'alt', // С зажатым Alt
  CTRL = 'ctrl', // С зажатым Ctrl
  CAPSLOCK = 'capslock', // С зажатым CapsLock
  META = 'meta', // С зажатым Meta (например, Command или Windows)
  FN = 'fn', // С зажатым Fn
}

// TODO: уточнить тип Finger | Finger[]
export type KeyFingerMapping = {
  [key in KeyCode]?: Finger[];
};

export type KeyboardGeometry = {
  [key in KeyCode]?: string;
};

export type FingerColorMapping = {
  [key in Finger]: string;
};

export enum KeyType {
  LETTER = 'letter',
  DIGIT = 'digit',
  SYMBOL = 'symbol',
  SPECIAL = 'special',
}

export type AlternateKey = {
  code: KeyCode;
  modifier: KeyModifier;
};

export type KeyCodeMap = { [key in KeyCode]: { char: string; type: KeyType; alternates?: AlternateKey[] } };

// TODO: alternates - клавиши могут быть с модификаторами {code: , modifier:}
export type KeyboardLayout = {
  [key in KeyModifier]?: KeyCodeMap;
};

export const keyCodes = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Enter',
  'ShiftLeft',
  'IntlBackslash',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'Fn',
  'AltLeft',
  'Space',
  'AltRight',
  'MetaRight',
  'ContextMenu',
  'ControlRight',
] as const;
export type KeyCode = (typeof keyCodes)[number];

export enum KeyboardFormat {
  Iso = 'iso',
  Ansi = 'ansi',
}

export enum KeyboardLayoutId {
  UsQwerty = 'us_qwerty',
  Dvorak = 'dvorak',
  Colemak = 'colemak',
  Workman = 'workman',
  Jcuken = 'jcuken',
}
