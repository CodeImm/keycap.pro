/**
 * https://w3c.github.io/uievents-code/#code-value-tables
 */
import { KeyModifier, KeyType, Layout } from './../../../../entities/keyboardLayout';

export const jcuken: Layout = {
  [KeyModifier.DEFAULT]: {
    Backquote: {
      key: 'ё',
      type: KeyType.LETTER,
    },
    Digit1: {
      key: '1',
      type: KeyType.DIGIT,
    },
    Digit2: {
      key: '2',
      type: KeyType.DIGIT,
    },
    Digit3: {
      key: '3',
      type: KeyType.DIGIT,
    },
    Digit4: {
      key: '4',
      type: KeyType.DIGIT,
    },
    Digit5: {
      key: '5',
      type: KeyType.DIGIT,
    },
    Digit6: {
      key: '6',
      type: KeyType.DIGIT,
    },
    Digit7: {
      key: '7',
      type: KeyType.DIGIT,
    },
    Digit8: {
      key: '8',
      type: KeyType.DIGIT,
    },
    Digit9: {
      key: '9',
      type: KeyType.DIGIT,
    },
    Digit0: {
      key: '0',
      type: KeyType.DIGIT,
    },
    Minus: {
      key: '-',
      type: KeyType.SYMBOL,
    },
    Equal: {
      key: '=',
      type: KeyType.SYMBOL,
    },
    Backspace: { key: 'Backspace', type: KeyType.SPECIAL },
    Tab: { key: 'Tab', type: KeyType.SPECIAL },
    KeyQ: {
      key: 'й',
      type: KeyType.LETTER,
    },
    KeyW: {
      key: 'ц',
      type: KeyType.LETTER,
    },
    KeyE: {
      key: 'у',
      type: KeyType.LETTER,
    },
    KeyR: {
      key: 'к',
      type: KeyType.LETTER,
    },
    KeyT: {
      key: 'е',
      type: KeyType.LETTER,
    },
    KeyY: {
      key: 'н',
      type: KeyType.LETTER,
    },
    KeyU: {
      key: 'г',
      type: KeyType.LETTER,
    },
    KeyI: {
      key: 'ш',
      type: KeyType.LETTER,
    },
    KeyO: {
      key: 'щ',
      type: KeyType.LETTER,
    },
    KeyP: {
      key: 'з',
      type: KeyType.LETTER,
    },
    BracketLeft: {
      key: 'х',
      type: KeyType.LETTER,
    },
    BracketRight: {
      key: 'ъ',
      type: KeyType.LETTER,
    },
    Backslash: {
      key: '\\',
      type: KeyType.SYMBOL,

      alternate: 'IntlBackslash',
    },
    CapsLock: { key: 'CapsLock', type: KeyType.SPECIAL },
    KeyA: {
      key: 'ф',
      type: KeyType.LETTER,
    },
    KeyS: {
      key: 'ы',
      type: KeyType.LETTER,
    },
    KeyD: {
      key: 'в',
      type: KeyType.LETTER,
    },
    KeyF: {
      key: 'а',
      type: KeyType.LETTER,
    },
    KeyG: {
      key: 'п',
      type: KeyType.LETTER,
    },
    KeyH: {
      key: 'р',
      type: KeyType.LETTER,
    },
    KeyJ: {
      key: 'о',
      type: KeyType.LETTER,
    },
    KeyK: {
      key: 'л',
      type: KeyType.LETTER,
    },
    KeyL: {
      key: 'д',
      type: KeyType.LETTER,
    },
    Semicolon: {
      key: 'ж',
      type: KeyType.LETTER,
    },
    Quote: {
      key: 'э',
      type: KeyType.LETTER,
    },
    Enter: { key: 'Enter', type: KeyType.SPECIAL },
    ShiftLeft: { key: 'Shift', type: KeyType.SPECIAL },
    IntlBackslash: {
      key: '\\',
      type: KeyType.SYMBOL,

      alternate: 'Backslash',
    },
    KeyZ: {
      key: 'я',
      type: KeyType.LETTER,
    },
    KeyX: {
      key: 'ч',
      type: KeyType.LETTER,
    },
    KeyC: {
      key: 'с',
      type: KeyType.LETTER,
    },
    KeyV: {
      key: 'м',
      type: KeyType.LETTER,
    },
    KeyB: {
      key: 'и',
      type: KeyType.LETTER,
    },
    KeyN: {
      key: 'т',
      type: KeyType.LETTER,
    },
    KeyM: {
      key: 'ь',
      type: KeyType.LETTER,
    },
    Comma: {
      key: 'б',
      type: KeyType.LETTER,
    },
    Period: {
      key: 'ю',
      type: KeyType.LETTER,
    },
    Slash: {
      key: '.',
      type: KeyType.SYMBOL,
    },
    ShiftRight: { key: 'Shift', type: KeyType.SPECIAL },
    ControlLeft: { key: 'Ctrl', type: KeyType.SPECIAL },
    Fn: {
      key: '',
      type: KeyType.SPECIAL,
    },
    MetaLeft: { key: '', type: KeyType.SPECIAL },
    AltLeft: { key: 'Alt', type: KeyType.SPECIAL },
    Space: { key: '', type: KeyType.SPECIAL },
    AltRight: { key: 'Alt', type: KeyType.SPECIAL },
    MetaRight: { key: '', type: KeyType.SPECIAL },
    ContextMenu: { key: '', type: KeyType.SPECIAL },
    ControlRight: { key: 'Ctrl', type: KeyType.SPECIAL },
  },
  [KeyModifier.SHIFT]: {
    Backquote: {
      key: 'Ё',
      type: KeyType.LETTER,
    },
    Digit1: {
      key: '!',
      type: KeyType.SYMBOL,
    },
    Digit2: {
      key: '"',
      type: KeyType.SYMBOL,
    },
    Digit3: {
      key: '№',
      type: KeyType.SYMBOL,
    },
    Digit4: {
      key: ';',
      type: KeyType.SYMBOL,
    },
    Digit5: {
      key: '%',
      type: KeyType.SYMBOL,
    },
    Digit6: {
      key: ':',
      type: KeyType.SYMBOL,
    },
    Digit7: {
      key: '?',
      type: KeyType.SYMBOL,
    },
    Digit8: {
      key: '*',
      type: KeyType.SYMBOL,
    },
    Digit9: {
      key: '(',
      type: KeyType.SYMBOL,
    },
    Digit0: {
      key: ')',
      type: KeyType.SYMBOL,
    },
    Minus: {
      key: '_',
      type: KeyType.SYMBOL,
    },
    Equal: {
      key: '+',
      type: KeyType.SYMBOL,
    },

    KeyQ: {
      key: 'Й',
      type: KeyType.LETTER,
    },
    KeyW: {
      key: 'Ц',
      type: KeyType.LETTER,
    },
    KeyE: {
      key: 'У',
      type: KeyType.LETTER,
    },
    KeyR: {
      key: 'К',
      type: KeyType.LETTER,
    },
    KeyT: {
      key: 'Е',
      type: KeyType.LETTER,
    },
    KeyY: {
      key: 'Н',
      type: KeyType.LETTER,
    },
    KeyU: {
      key: 'Г',
      type: KeyType.LETTER,
    },
    KeyI: {
      key: 'Ш',
      type: KeyType.LETTER,
    },
    KeyO: {
      key: 'Щ',
      type: KeyType.LETTER,
    },
    KeyP: {
      key: 'З',
      type: KeyType.LETTER,
    },
    BracketLeft: {
      key: 'Х',
      type: KeyType.LETTER,
    },
    BracketRight: {
      key: 'Ъ',
      type: KeyType.LETTER,
    },
    Backslash: {
      key: '/',
      type: KeyType.SYMBOL,
      alternate: 'IntlBackslash',
    },

    KeyA: {
      key: 'Ф',
      type: KeyType.LETTER,
    },
    KeyS: {
      key: 'Ы',
      type: KeyType.LETTER,
    },
    KeyD: {
      key: 'В',
      type: KeyType.LETTER,
    },
    KeyF: {
      key: 'А',
      type: KeyType.LETTER,
    },
    KeyG: {
      key: 'П',
      type: KeyType.LETTER,
    },
    KeyH: {
      key: 'Р',
      type: KeyType.LETTER,
    },
    KeyJ: {
      key: 'О',
      type: KeyType.LETTER,
    },
    KeyK: {
      key: 'Л',
      type: KeyType.LETTER,
    },
    KeyL: {
      key: 'Д',
      type: KeyType.LETTER,
    },
    Semicolon: {
      key: 'Ж',
      type: KeyType.LETTER,
    },
    Quote: {
      key: 'Э',
      type: KeyType.LETTER,
    },

    IntlBackslash: {
      key: '/',
      type: KeyType.SYMBOL,
      alternate: 'Backslash',
    },
    KeyZ: {
      key: 'Я',
      type: KeyType.LETTER,
    },
    KeyX: {
      key: 'Ч',
      type: KeyType.LETTER,
    },
    KeyC: {
      key: 'С',
      type: KeyType.LETTER,
    },
    KeyV: {
      key: 'М',
      type: KeyType.LETTER,
    },
    KeyB: {
      key: 'И',
      type: KeyType.LETTER,
    },
    KeyN: {
      key: 'Т',
      type: KeyType.LETTER,
    },
    KeyM: {
      key: 'Ь',
      type: KeyType.LETTER,
    },
    Comma: {
      key: 'Б',
      type: KeyType.LETTER,
    },
    Period: {
      key: 'Ю',
      type: KeyType.LETTER,
    },
    Slash: {
      key: ',',
      type: KeyType.SYMBOL,
    },
  },
};
