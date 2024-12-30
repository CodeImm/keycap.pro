/**
 * https://w3c.github.io/uievents-code/#code-value-tables
 */
import { KeyModifier, KeyType, KeyboardLayout } from '@/shared/types';

export const jcuken: KeyboardLayout = {
  [KeyModifier.DEFAULT]: {
    Backquote: {
      char: 'ё',
      type: KeyType.LETTER,
    },
    Digit1: {
      char: '1',
      type: KeyType.DIGIT,
    },
    Digit2: {
      char: '2',
      type: KeyType.DIGIT,
    },
    Digit3: {
      char: '3',
      type: KeyType.DIGIT,
    },
    Digit4: {
      char: '4',
      type: KeyType.DIGIT,
    },
    Digit5: {
      char: '5',
      type: KeyType.DIGIT,
    },
    Digit6: {
      char: '6',
      type: KeyType.DIGIT,
    },
    Digit7: {
      char: '7',
      type: KeyType.DIGIT,
    },
    Digit8: {
      char: '8',
      type: KeyType.DIGIT,
    },
    Digit9: {
      char: '9',
      type: KeyType.DIGIT,
    },
    Digit0: {
      char: '0',
      type: KeyType.DIGIT,
    },
    Minus: {
      char: '-',
      type: KeyType.SYMBOL,
    },
    Equal: {
      char: '=',
      type: KeyType.SYMBOL,
    },
    Backspace: { char: 'Backspace', type: KeyType.SPECIAL },
    Tab: { char: 'Tab', type: KeyType.SPECIAL },
    KeyQ: {
      char: 'й',
      type: KeyType.LETTER,
    },
    KeyW: {
      char: 'ц',
      type: KeyType.LETTER,
    },
    KeyE: {
      char: 'у',
      type: KeyType.LETTER,
    },
    KeyR: {
      char: 'к',
      type: KeyType.LETTER,
    },
    KeyT: {
      char: 'е',
      type: KeyType.LETTER,
    },
    KeyY: {
      char: 'н',
      type: KeyType.LETTER,
    },
    KeyU: {
      char: 'г',
      type: KeyType.LETTER,
    },
    KeyI: {
      char: 'ш',
      type: KeyType.LETTER,
    },
    KeyO: {
      char: 'щ',
      type: KeyType.LETTER,
    },
    KeyP: {
      char: 'з',
      type: KeyType.LETTER,
    },
    BracketLeft: {
      char: 'х',
      type: KeyType.LETTER,
    },
    BracketRight: {
      char: 'ъ',
      type: KeyType.LETTER,
    },
    Backslash: {
      char: '\\',
      type: KeyType.SYMBOL,
      alternates: [{ code: 'IntlBackslash', modifier: KeyModifier.DEFAULT }],
    },
    CapsLock: { char: 'CapsLock', type: KeyType.SPECIAL },
    KeyA: {
      char: 'ф',
      type: KeyType.LETTER,
    },
    KeyS: {
      char: 'ы',
      type: KeyType.LETTER,
    },
    KeyD: {
      char: 'в',
      type: KeyType.LETTER,
    },
    KeyF: {
      char: 'а',
      type: KeyType.LETTER,
    },
    KeyG: {
      char: 'п',
      type: KeyType.LETTER,
    },
    KeyH: {
      char: 'р',
      type: KeyType.LETTER,
    },
    KeyJ: {
      char: 'о',
      type: KeyType.LETTER,
    },
    KeyK: {
      char: 'л',
      type: KeyType.LETTER,
    },
    KeyL: {
      char: 'д',
      type: KeyType.LETTER,
    },
    Semicolon: {
      char: 'ж',
      type: KeyType.LETTER,
    },
    Quote: {
      char: 'э',
      type: KeyType.LETTER,
    },
    Enter: { char: 'Enter', type: KeyType.SPECIAL },
    ShiftLeft: { char: 'Shift', type: KeyType.SPECIAL },
    IntlBackslash: {
      char: '\\',
      type: KeyType.SYMBOL,
      alternates: [{ code: 'Backslash', modifier: KeyModifier.DEFAULT }],
    },
    KeyZ: {
      char: 'я',
      type: KeyType.LETTER,
    },
    KeyX: {
      char: 'ч',
      type: KeyType.LETTER,
    },
    KeyC: {
      char: 'с',
      type: KeyType.LETTER,
    },
    KeyV: {
      char: 'м',
      type: KeyType.LETTER,
    },
    KeyB: {
      char: 'и',
      type: KeyType.LETTER,
    },
    KeyN: {
      char: 'т',
      type: KeyType.LETTER,
    },
    KeyM: {
      char: 'ь',
      type: KeyType.LETTER,
    },
    Comma: {
      char: 'б',
      type: KeyType.LETTER,
    },
    Period: {
      char: 'ю',
      type: KeyType.LETTER,
    },
    Slash: {
      char: '.',
      type: KeyType.SYMBOL,
    },
    ShiftRight: { char: 'Shift', type: KeyType.SPECIAL },
    ControlLeft: { char: 'Ctrl', type: KeyType.SPECIAL },
    Fn: {
      char: '',
      type: KeyType.SPECIAL,
    },
    MetaLeft: { char: '', type: KeyType.SPECIAL },
    AltLeft: { char: 'Alt', type: KeyType.SPECIAL },
    Space: { char: '', type: KeyType.SPECIAL },
    AltRight: { char: 'Alt', type: KeyType.SPECIAL },
    MetaRight: { char: '', type: KeyType.SPECIAL },
    ContextMenu: { char: '', type: KeyType.SPECIAL },
    ControlRight: { char: 'Ctrl', type: KeyType.SPECIAL },
  },
  [KeyModifier.SHIFT]: {
    Backquote: {
      char: 'Ё',
      type: KeyType.LETTER,
    },
    Digit1: {
      char: '!',
      type: KeyType.SYMBOL,
    },
    Digit2: {
      char: '"',
      type: KeyType.SYMBOL,
    },
    Digit3: {
      char: '№',
      type: KeyType.SYMBOL,
    },
    Digit4: {
      char: ';',
      type: KeyType.SYMBOL,
    },
    Digit5: {
      char: '%',
      type: KeyType.SYMBOL,
    },
    Digit6: {
      char: ':',
      type: KeyType.SYMBOL,
    },
    Digit7: {
      char: '?',
      type: KeyType.SYMBOL,
    },
    Digit8: {
      char: '*',
      type: KeyType.SYMBOL,
    },
    Digit9: {
      char: '(',
      type: KeyType.SYMBOL,
    },
    Digit0: {
      char: ')',
      type: KeyType.SYMBOL,
    },
    Minus: {
      char: '_',
      type: KeyType.SYMBOL,
    },
    Equal: {
      char: '+',
      type: KeyType.SYMBOL,
    },

    KeyQ: {
      char: 'Й',
      type: KeyType.LETTER,
    },
    KeyW: {
      char: 'Ц',
      type: KeyType.LETTER,
    },
    KeyE: {
      char: 'У',
      type: KeyType.LETTER,
    },
    KeyR: {
      char: 'К',
      type: KeyType.LETTER,
    },
    KeyT: {
      char: 'Е',
      type: KeyType.LETTER,
    },
    KeyY: {
      char: 'Н',
      type: KeyType.LETTER,
    },
    KeyU: {
      char: 'Г',
      type: KeyType.LETTER,
    },
    KeyI: {
      char: 'Ш',
      type: KeyType.LETTER,
    },
    KeyO: {
      char: 'Щ',
      type: KeyType.LETTER,
    },
    KeyP: {
      char: 'З',
      type: KeyType.LETTER,
    },
    BracketLeft: {
      char: 'Х',
      type: KeyType.LETTER,
    },
    BracketRight: {
      char: 'Ъ',
      type: KeyType.LETTER,
    },
    Backslash: {
      char: '/',
      type: KeyType.SYMBOL,
      alternates: [{ code: 'IntlBackslash', modifier: KeyModifier.SHIFT }],
    },

    KeyA: {
      char: 'Ф',
      type: KeyType.LETTER,
    },
    KeyS: {
      char: 'Ы',
      type: KeyType.LETTER,
    },
    KeyD: {
      char: 'В',
      type: KeyType.LETTER,
    },
    KeyF: {
      char: 'А',
      type: KeyType.LETTER,
    },
    KeyG: {
      char: 'П',
      type: KeyType.LETTER,
    },
    KeyH: {
      char: 'Р',
      type: KeyType.LETTER,
    },
    KeyJ: {
      char: 'О',
      type: KeyType.LETTER,
    },
    KeyK: {
      char: 'Л',
      type: KeyType.LETTER,
    },
    KeyL: {
      char: 'Д',
      type: KeyType.LETTER,
    },
    Semicolon: {
      char: 'Ж',
      type: KeyType.LETTER,
    },
    Quote: {
      char: 'Э',
      type: KeyType.LETTER,
    },

    IntlBackslash: {
      char: '/',
      type: KeyType.SYMBOL,
      alternates: [{ code: 'Backslash', modifier: KeyModifier.SHIFT }],
    },
    KeyZ: {
      char: 'Я',
      type: KeyType.LETTER,
    },
    KeyX: {
      char: 'Ч',
      type: KeyType.LETTER,
    },
    KeyC: {
      char: 'С',
      type: KeyType.LETTER,
    },
    KeyV: {
      char: 'М',
      type: KeyType.LETTER,
    },
    KeyB: {
      char: 'И',
      type: KeyType.LETTER,
    },
    KeyN: {
      char: 'Т',
      type: KeyType.LETTER,
    },
    KeyM: {
      char: 'Ь',
      type: KeyType.LETTER,
    },
    Comma: {
      char: 'Б',
      type: KeyType.LETTER,
    },
    Period: {
      char: 'Ю',
      type: KeyType.LETTER,
    },
    Slash: {
      char: ',',
      type: KeyType.SYMBOL,
    },
  },
};
