/**
 * https://w3c.github.io/uievents-code/#code-value-tables
 */
import type { Layout } from '../../model';

export const dvorak: Layout = {
  default: {
    Backquote: {
      key: '`',
      type: 'symbol',
    },
    Digit1: {
      key: '1',
      type: 'digit',
    },
    Digit2: {
      key: '2',
      type: 'digit',
    },
    Digit3: {
      key: '3',
      type: 'digit',
    },
    Digit4: {
      key: '4',
      type: 'digit',
    },
    Digit5: {
      key: '5',
      type: 'digit',
    },
    Digit6: {
      key: '6',
      type: 'digit',
    },
    Digit7: {
      key: '7',
      type: 'digit',
    },
    Digit8: {
      key: '8',
      type: 'digit',
    },
    Digit9: {
      key: '9',
      type: 'digit',
    },
    Digit0: {
      key: '0',
      type: 'digit',
    },
    Minus: {
      key: '[',
      type: 'symbol',
    },
    Equal: {
      key: ']',
      type: 'symbol',
    },
    Backspace: { key: 'Backspace', type: 'sys' },
    Tab: { key: 'Tab', type: 'sys' },
    KeyQ: {
      key: "'",
      type: 'symbol',
    },
    KeyW: {
      key: ',',
      type: 'symbol',
    },
    KeyE: {
      key: '.',
      type: 'symbol',
    },
    KeyR: {
      key: 'p',
      type: 'letter',
    },
    KeyT: {
      key: 'y',
      type: 'letter',
    },
    KeyY: {
      key: 'f',
      type: 'letter',
    },
    KeyU: {
      key: 'g',
      type: 'letter',
    },
    KeyI: {
      key: 'c',
      type: 'letter',
    },
    KeyO: {
      key: 'r',
      type: 'letter',
    },
    KeyP: {
      key: 'l',
      type: 'letter',
    },
    BracketLeft: {
      key: '/',
      type: 'symbol',
    },
    BracketRight: {
      key: '=',
      type: 'symbol',
    },
    Backslash: {
      key: '\\',
      type: 'symbol',

      alternate: 'IntlBackslash',
    },
    CapsLock: { key: 'CapsLock', type: 'sys' },
    KeyA: {
      key: 'a',
      type: 'letter',
    },
    KeyS: {
      key: 'o',
      type: 'letter',
    },
    KeyD: {
      key: 'e',
      type: 'letter',
    },
    KeyF: {
      key: 'u',
      type: 'letter',
    },
    KeyG: {
      key: 'i',
      type: 'letter',
    },
    KeyH: {
      key: 'd',
      type: 'letter',
    },
    KeyJ: {
      key: 'h',
      type: 'letter',
    },
    KeyK: {
      key: 't',
      type: 'letter',
    },
    KeyL: {
      key: 'n',
      type: 'letter',
    },
    Semicolon: {
      key: 's',
      type: 'letter',
    },
    Quote: {
      key: '-',
      type: 'symbol',
    },
    Enter: { key: 'Enter', type: 'sys' },
    ShiftLeft: { key: 'Shift', type: 'sys' },
    IntlBackslash: {
      key: '\\',
      type: 'symbol',

      alternate: 'Backslash',
    },
    KeyZ: {
      key: ';',
      type: 'symbol',
    },
    KeyX: {
      key: 'q',
      type: 'letter',
    },
    KeyC: {
      key: 'j',
      type: 'letter',
    },
    KeyV: {
      key: 'k',
      type: 'letter',
    },
    KeyB: {
      key: 'x',
      type: 'letter',
    },
    KeyN: {
      key: 'b',
      type: 'letter',
    },
    KeyM: {
      key: 'm',
      type: 'letter',
    },
    Comma: {
      key: 'w',
      type: 'letter',
    },
    Period: {
      key: 'v',
      type: 'letter',
    },
    Slash: {
      key: 'z',
      type: 'letter',
    },
    ShiftRight: { key: 'Shift', type: 'sys' },
    ControlLeft: { key: 'Ctrl', type: 'sys' },
    Fn: {
      key: '',
      type: 'sys',
    },
    MetaLeft: { key: '', type: 'sys' },
    AltLeft: { key: 'Alt', type: 'sys' },
    Space: { key: '', type: 'sys' },
    AltRight: { key: 'Alt', type: 'sys' },
    MetaRight: { key: '', type: 'sys' },
    ContextMenu: { key: '', type: 'sys' },
    ControlRight: { key: 'Ctrl', type: 'sys' },
  },
  shift: {
    Backquote: {
      key: '~',
      type: 'symbol',
    },
    Digit1: {
      key: '!',
      type: 'symbol',
    },
    Digit2: {
      key: '@',
      type: 'symbol',
    },
    Digit3: {
      key: '#',
      type: 'symbol',
    },
    Digit4: {
      key: '$',
      type: 'symbol',
    },
    Digit5: {
      key: '%',
      type: 'symbol',
    },
    Digit6: {
      key: '^',
      type: 'symbol',
    },
    Digit7: {
      key: '&',
      type: 'symbol',
    },
    Digit8: {
      key: '*',
      type: 'symbol',
    },
    Digit9: {
      key: '(',
      type: 'symbol',
    },
    Digit0: {
      key: ')',
      type: 'symbol',
    },
    Minus: {
      key: '{',
      type: 'symbol',
    },
    Equal: {
      key: '}',
      type: 'symbol',
    },

    KeyQ: {
      key: '"',
      type: 'symbol',
    },
    KeyW: {
      key: '<',
      type: 'symbol',
    },
    KeyE: {
      key: '>',
      type: 'symbol',
    },
    KeyR: {
      key: 'P',
      type: 'letter',
    },
    KeyT: {
      key: 'Y',
      type: 'letter',
    },
    KeyY: {
      key: 'F',
      type: 'letter',
    },
    KeyU: {
      key: 'G',
      type: 'letter',
    },
    KeyI: {
      key: 'C',
      type: 'letter',
    },
    KeyO: {
      key: 'R',
      type: 'letter',
    },
    KeyP: {
      key: 'L',
      type: 'letter',
    },
    BracketLeft: {
      key: '?',
      type: 'symbol',
    },
    BracketRight: {
      key: '+',
      type: 'symbol',
    },
    Backslash: {
      key: '|',
      type: 'symbol',
      alternate: 'IntlBackslash',
    },

    KeyA: {
      key: 'A',
      type: 'letter',
    },
    KeyS: {
      key: 'O',
      type: 'letter',
    },
    KeyD: {
      key: 'E',
      type: 'letter',
    },
    KeyF: {
      key: 'U',
      type: 'letter',
    },
    KeyG: {
      key: 'I',
      type: 'letter',
    },
    KeyH: {
      key: 'D',
      type: 'letter',
    },
    KeyJ: {
      key: 'H',
      type: 'letter',
    },
    KeyK: {
      key: 'T',
      type: 'letter',
    },
    KeyL: {
      key: 'N',
      type: 'letter',
    },
    Semicolon: {
      key: 'S',
      type: 'letter',
    },
    Quote: {
      key: '_',
      type: 'symbol',
    },

    IntlBackslash: {
      key: '|',
      type: 'symbol',
      alternate: 'Backslash',
    },
    KeyZ: {
      key: ':',
      type: 'symbol',
    },
    KeyX: {
      key: 'Q',
      type: 'letter',
    },
    KeyC: {
      key: 'J',
      type: 'letter',
    },
    KeyV: {
      key: 'K',
      type: 'letter',
    },
    KeyB: {
      key: 'X',
      type: 'letter',
    },
    KeyN: {
      key: 'B',
      type: 'letter',
    },
    KeyM: {
      key: 'M',
      type: 'letter',
    },
    Comma: {
      key: 'W',
      type: 'letter',
    },
    Period: {
      key: 'V',
      type: 'letter',
    },
    Slash: {
      key: 'Z',
      type: 'letter',
    },
  },
};
