/**
 * https://w3c.github.io/uievents-code/#code-value-tables
 */
import { KeyModifier, KeyType, Layout } from '@/entities/keyboardLayout';

export const dvorak: Layout = {
  [KeyModifier.DEFAULT]: {
    Backquote: {
      key: '`',
      type: KeyType.SYMBOL,
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
      key: '[',
      type: KeyType.SYMBOL,
    },
    Equal: {
      key: ']',
      type: KeyType.SYMBOL,
    },
    Backspace: { key: 'Backspace', type: KeyType.SPECIAL },
    Tab: { key: 'Tab', type: KeyType.SPECIAL },
    KeyQ: {
      key: "'",
      type: KeyType.SYMBOL,
    },
    KeyW: {
      key: ',',
      type: KeyType.SYMBOL,
    },
    KeyE: {
      key: '.',
      type: KeyType.SYMBOL,
    },
    KeyR: {
      key: 'p',
      type: KeyType.LETTER,
    },
    KeyT: {
      key: 'y',
      type: KeyType.LETTER,
    },
    KeyY: {
      key: 'f',
      type: KeyType.LETTER,
    },
    KeyU: {
      key: 'g',
      type: KeyType.LETTER,
    },
    KeyI: {
      key: 'c',
      type: KeyType.LETTER,
    },
    KeyO: {
      key: 'r',
      type: KeyType.LETTER,
    },
    KeyP: {
      key: 'l',
      type: KeyType.LETTER,
    },
    BracketLeft: {
      key: '/',
      type: KeyType.SYMBOL,
    },
    BracketRight: {
      key: '=',
      type: KeyType.SYMBOL,
    },
    Backslash: {
      key: '\\',
      type: KeyType.SYMBOL,

      alternate: 'IntlBackslash',
    },
    CapsLock: { key: 'CapsLock', type: KeyType.SPECIAL },
    KeyA: {
      key: 'a',
      type: KeyType.LETTER,
    },
    KeyS: {
      key: 'o',
      type: KeyType.LETTER,
    },
    KeyD: {
      key: 'e',
      type: KeyType.LETTER,
    },
    KeyF: {
      key: 'u',
      type: KeyType.LETTER,
    },
    KeyG: {
      key: 'i',
      type: KeyType.LETTER,
    },
    KeyH: {
      key: 'd',
      type: KeyType.LETTER,
    },
    KeyJ: {
      key: 'h',
      type: KeyType.LETTER,
    },
    KeyK: {
      key: 't',
      type: KeyType.LETTER,
    },
    KeyL: {
      key: 'n',
      type: KeyType.LETTER,
    },
    Semicolon: {
      key: 's',
      type: KeyType.LETTER,
    },
    Quote: {
      key: '-',
      type: KeyType.SYMBOL,
    },
    Enter: { key: 'Enter', type: KeyType.SPECIAL },
    ShiftLeft: { key: 'Shift', type: KeyType.SPECIAL },
    IntlBackslash: {
      key: '\\',
      type: KeyType.SYMBOL,

      alternate: 'Backslash',
    },
    KeyZ: {
      key: ';',
      type: KeyType.SYMBOL,
    },
    KeyX: {
      key: 'q',
      type: KeyType.LETTER,
    },
    KeyC: {
      key: 'j',
      type: KeyType.LETTER,
    },
    KeyV: {
      key: 'k',
      type: KeyType.LETTER,
    },
    KeyB: {
      key: 'x',
      type: KeyType.LETTER,
    },
    KeyN: {
      key: 'b',
      type: KeyType.LETTER,
    },
    KeyM: {
      key: 'm',
      type: KeyType.LETTER,
    },
    Comma: {
      key: 'w',
      type: KeyType.LETTER,
    },
    Period: {
      key: 'v',
      type: KeyType.LETTER,
    },
    Slash: {
      key: 'z',
      type: KeyType.LETTER,
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
      key: '~',
      type: KeyType.SYMBOL,
    },
    Digit1: {
      key: '!',
      type: KeyType.SYMBOL,
    },
    Digit2: {
      key: '@',
      type: KeyType.SYMBOL,
    },
    Digit3: {
      key: '#',
      type: KeyType.SYMBOL,
    },
    Digit4: {
      key: '$',
      type: KeyType.SYMBOL,
    },
    Digit5: {
      key: '%',
      type: KeyType.SYMBOL,
    },
    Digit6: {
      key: '^',
      type: KeyType.SYMBOL,
    },
    Digit7: {
      key: '&',
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
      key: '{',
      type: KeyType.SYMBOL,
    },
    Equal: {
      key: '}',
      type: KeyType.SYMBOL,
    },

    KeyQ: {
      key: '"',
      type: KeyType.SYMBOL,
    },
    KeyW: {
      key: '<',
      type: KeyType.SYMBOL,
    },
    KeyE: {
      key: '>',
      type: KeyType.SYMBOL,
    },
    KeyR: {
      key: 'P',
      type: KeyType.LETTER,
    },
    KeyT: {
      key: 'Y',
      type: KeyType.LETTER,
    },
    KeyY: {
      key: 'F',
      type: KeyType.LETTER,
    },
    KeyU: {
      key: 'G',
      type: KeyType.LETTER,
    },
    KeyI: {
      key: 'C',
      type: KeyType.LETTER,
    },
    KeyO: {
      key: 'R',
      type: KeyType.LETTER,
    },
    KeyP: {
      key: 'L',
      type: KeyType.LETTER,
    },
    BracketLeft: {
      key: '?',
      type: KeyType.SYMBOL,
    },
    BracketRight: {
      key: '+',
      type: KeyType.SYMBOL,
    },
    Backslash: {
      key: '|',
      type: KeyType.SYMBOL,
      alternate: 'IntlBackslash',
    },

    KeyA: {
      key: 'A',
      type: KeyType.LETTER,
    },
    KeyS: {
      key: 'O',
      type: KeyType.LETTER,
    },
    KeyD: {
      key: 'E',
      type: KeyType.LETTER,
    },
    KeyF: {
      key: 'U',
      type: KeyType.LETTER,
    },
    KeyG: {
      key: 'I',
      type: KeyType.LETTER,
    },
    KeyH: {
      key: 'D',
      type: KeyType.LETTER,
    },
    KeyJ: {
      key: 'H',
      type: KeyType.LETTER,
    },
    KeyK: {
      key: 'T',
      type: KeyType.LETTER,
    },
    KeyL: {
      key: 'N',
      type: KeyType.LETTER,
    },
    Semicolon: {
      key: 'S',
      type: KeyType.LETTER,
    },
    Quote: {
      key: '_',
      type: KeyType.SYMBOL,
    },

    IntlBackslash: {
      key: '|',
      type: KeyType.SYMBOL,
      alternate: 'Backslash',
    },
    KeyZ: {
      key: ':',
      type: KeyType.SYMBOL,
    },
    KeyX: {
      key: 'Q',
      type: KeyType.LETTER,
    },
    KeyC: {
      key: 'J',
      type: KeyType.LETTER,
    },
    KeyV: {
      key: 'K',
      type: KeyType.LETTER,
    },
    KeyB: {
      key: 'X',
      type: KeyType.LETTER,
    },
    KeyN: {
      key: 'B',
      type: KeyType.LETTER,
    },
    KeyM: {
      key: 'M',
      type: KeyType.LETTER,
    },
    Comma: {
      key: 'W',
      type: KeyType.LETTER,
    },
    Period: {
      key: 'V',
      type: KeyType.LETTER,
    },
    Slash: {
      key: 'Z',
      type: KeyType.LETTER,
    },
  },
};
