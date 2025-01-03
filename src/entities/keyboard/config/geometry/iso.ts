import { generateRow } from '../../lib/geometry';

const iso = [
  /** row 1 */
  generateRow(
    [
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
    ],
    0,
    true
  ),
  /** row 2 */
  generateRow(
    [
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
      'Enter',
    ],
    1,
    true
  ),

  /** row 3 */
  generateRow(
    [
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
      'IntlBackslash',
    ],
    2,
    true
  ),
  /** row 4 */
  generateRow(
    [
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
    ],
    3,
    true
  ),
  /** row 5 */
  generateRow(
    ['ControlLeft', 'Fn', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ContextMenu', 'ControlRight'],
    4,
    true
  ),
];

export { iso };
