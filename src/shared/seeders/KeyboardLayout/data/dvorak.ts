/**
 * https://w3c.github.io/uievents-code/#code-value-tables
 */

import { KeyboardLayout, KeyModifier, KeyType } from "@/shared/types";


export const dvorak: KeyboardLayout = {
  [KeyModifier.DEFAULT]: {
    Backquote: {
      char: '`',
      type: KeyType.SYMBOL,
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
      char: '[',
      type: KeyType.SYMBOL,
    },
    Equal: {
      char: ']',
      type: KeyType.SYMBOL,
    },
    Backspace: { char: 'Backspace', type: KeyType.SPECIAL },
    Tab: { char: 'Tab', type: KeyType.SPECIAL },
    KeyQ: {
      char: "'",
      type: KeyType.SYMBOL,
    },
    KeyW: {
      char: ',',
      type: KeyType.SYMBOL,
    },
    KeyE: {
      char: '.',
      type: KeyType.SYMBOL,
    },
    KeyR: {
      char: 'p',
      type: KeyType.LETTER,
    },
    KeyT: {
      char: 'y',
      type: KeyType.LETTER,
    },
    KeyY: {
      char: 'f',
      type: KeyType.LETTER,
    },
    KeyU: {
      char: 'g',
      type: KeyType.LETTER,
    },
    KeyI: {
      char: 'c',
      type: KeyType.LETTER,
    },
    KeyO: {
      char: 'r',
      type: KeyType.LETTER,
    },
    KeyP: {
      char: 'l',
      type: KeyType.LETTER,
    },
    BracketLeft: {
      char: '/',
      type: KeyType.SYMBOL,
    },
    BracketRight: {
      char: '=',
      type: KeyType.SYMBOL,
    },
    Backslash: {
      char: '\\',
      type: KeyType.SYMBOL,
      alternates: [{ code: 'IntlBackslash', modifier: KeyModifier.DEFAULT }]
    },
    CapsLock: { char: 'CapsLock', type: KeyType.SPECIAL },
    KeyA: {
      char: 'a',
      type: KeyType.LETTER,
    },
    KeyS: {
      char: 'o',
      type: KeyType.LETTER,
    },
    KeyD: {
      char: 'e',
      type: KeyType.LETTER,
    },
    KeyF: {
      char: 'u',
      type: KeyType.LETTER,
    },
    KeyG: {
      char: 'i',
      type: KeyType.LETTER,
    },
    KeyH: {
      char: 'd',
      type: KeyType.LETTER,
    },
    KeyJ: {
      char: 'h',
      type: KeyType.LETTER,
    },
    KeyK: {
      char: 't',
      type: KeyType.LETTER,
    },
    KeyL: {
      char: 'n',
      type: KeyType.LETTER,
    },
    Semicolon: {
      char: 's',
      type: KeyType.LETTER,
    },
    Quote: {
      char: '-',
      type: KeyType.SYMBOL,
    },
    Enter: { char: 'Enter', type: KeyType.SPECIAL },
    ShiftLeft: { char: 'Shift', type: KeyType.SPECIAL },
    IntlBackslash: {
      char: '\\',
      type: KeyType.SYMBOL,
      alternates: [{ code: 'Backslash', modifier: KeyModifier.DEFAULT }]
    },
    KeyZ: {
      char: ';',
      type: KeyType.SYMBOL,
    },
    KeyX: {
      char: 'q',
      type: KeyType.LETTER,
    },
    KeyC: {
      char: 'j',
      type: KeyType.LETTER,
    },
    KeyV: {
      char: 'k',
      type: KeyType.LETTER,
    },
    KeyB: {
      char: 'x',
      type: KeyType.LETTER,
    },
    KeyN: {
      char: 'b',
      type: KeyType.LETTER,
    },
    KeyM: {
      char: 'm',
      type: KeyType.LETTER,
    },
    Comma: {
      char: 'w',
      type: KeyType.LETTER,
    },
    Period: {
      char: 'v',
      type: KeyType.LETTER,
    },
    Slash: {
      char: 'z',
      type: KeyType.LETTER,
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
      char: '~',
      type: KeyType.SYMBOL,
    },
    Digit1: {
      char: '!',
      type: KeyType.SYMBOL,
    },
    Digit2: {
      char: '@',
      type: KeyType.SYMBOL,
    },
    Digit3: {
      char: '#',
      type: KeyType.SYMBOL,
    },
    Digit4: {
      char: '$',
      type: KeyType.SYMBOL,
    },
    Digit5: {
      char: '%',
      type: KeyType.SYMBOL,
    },
    Digit6: {
      char: '^',
      type: KeyType.SYMBOL,
    },
    Digit7: {
      char: '&',
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
      char: '{',
      type: KeyType.SYMBOL,
    },
    Equal: {
      char: '}',
      type: KeyType.SYMBOL,
    },

    KeyQ: {
      char: '"',
      type: KeyType.SYMBOL,
    },
    KeyW: {
      char: '<',
      type: KeyType.SYMBOL,
    },
    KeyE: {
      char: '>',
      type: KeyType.SYMBOL,
    },
    KeyR: {
      char: 'P',
      type: KeyType.LETTER,
    },
    KeyT: {
      char: 'Y',
      type: KeyType.LETTER,
    },
    KeyY: {
      char: 'F',
      type: KeyType.LETTER,
    },
    KeyU: {
      char: 'G',
      type: KeyType.LETTER,
    },
    KeyI: {
      char: 'C',
      type: KeyType.LETTER,
    },
    KeyO: {
      char: 'R',
      type: KeyType.LETTER,
    },
    KeyP: {
      char: 'L',
      type: KeyType.LETTER,
    },
    BracketLeft: {
      char: '?',
      type: KeyType.SYMBOL,
    },
    BracketRight: {
      char: '+',
      type: KeyType.SYMBOL,
    },
    Backslash: {
      char: '|',
      type: KeyType.SYMBOL,
      alternates: [{ code: 'IntlBackslash', modifier: KeyModifier.SHIFT }]
    },

    KeyA: {
      char: 'A',
      type: KeyType.LETTER,
    },
    KeyS: {
      char: 'O',
      type: KeyType.LETTER,
    },
    KeyD: {
      char: 'E',
      type: KeyType.LETTER,
    },
    KeyF: {
      char: 'U',
      type: KeyType.LETTER,
    },
    KeyG: {
      char: 'I',
      type: KeyType.LETTER,
    },
    KeyH: {
      char: 'D',
      type: KeyType.LETTER,
    },
    KeyJ: {
      char: 'H',
      type: KeyType.LETTER,
    },
    KeyK: {
      char: 'T',
      type: KeyType.LETTER,
    },
    KeyL: {
      char: 'N',
      type: KeyType.LETTER,
    },
    Semicolon: {
      char: 'S',
      type: KeyType.LETTER,
    },
    Quote: {
      char: '_',
      type: KeyType.SYMBOL,
    },

    IntlBackslash: {
      char: '|',
      type: KeyType.SYMBOL,
      alternates: [{ code: 'Backslash', modifier: KeyModifier.SHIFT }]
    },
    KeyZ: {
      char: ':',
      type: KeyType.SYMBOL,
    },
    KeyX: {
      char: 'Q',
      type: KeyType.LETTER,
    },
    KeyC: {
      char: 'J',
      type: KeyType.LETTER,
    },
    KeyV: {
      char: 'K',
      type: KeyType.LETTER,
    },
    KeyB: {
      char: 'X',
      type: KeyType.LETTER,
    },
    KeyN: {
      char: 'B',
      type: KeyType.LETTER,
    },
    KeyM: {
      char: 'M',
      type: KeyType.LETTER,
    },
    Comma: {
      char: 'W',
      type: KeyType.LETTER,
    },
    Period: {
      char: 'V',
      type: KeyType.LETTER,
    },
    Slash: {
      char: 'Z',
      type: KeyType.LETTER,
    },
  },
};
