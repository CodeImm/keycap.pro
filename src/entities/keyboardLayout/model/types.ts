import { LayoutKeyId } from '@/entities/keyboard';

export enum KeyModifier {
  DEFAULT = 'default', // Обычное состояние клавиши (без модификаторов)
  SHIFT = 'shift', // С зажатым Shift
  ALT = 'alt', // С зажатым Alt
  CTRL = 'ctrl', // С зажатым Ctrl
  CAPSLOCK = 'capslock', // С зажатым CapsLock
  META = 'meta', // С зажатым Meta (например, Command или Windows)
  FN = 'fn', // С зажатым Fn
}

export enum KeyType {
  LETTER = 'letter',
  DIGIT = 'digit',
  SYMBOL = 'symbol',
  SPECIAL = 'special',
}

export type LayoutKeyInfo = {
  [key in LayoutKeyId]?: {
    key: string;
    type: KeyType;
    alternate?: LayoutKeyId;
  };
};

export enum KeyboardLayoutId {
  UsQwerty = 'us_qwerty',
  Dvorak = 'dvorak',
  Colemak = 'colemak',
  Workman = 'workman',
  Jcuken = 'jcuken',
}

export type Layout = { [key in KeyModifier]?: LayoutKeyInfo };
