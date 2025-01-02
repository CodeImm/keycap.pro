import { KeyCode } from '@/shared/types';

import { calculateKeycapLegendPositions } from './getKeycapLegendPositions';

import { KeyGeometry } from '../model/types';

const KEYCAP_HEIGHT = 40;
const KEYCAP_WIDTH = 40;
const ROW_GAP = 2;
const KEYCAP_SPACING = 2;

const standardKeyShape = `M 0 0 H ${KEYCAP_WIDTH} V ${KEYCAP_HEIGHT} H 0 Z`;

// ANSI Key Shapes
const keyShapesANSI = {
  Backquote: standardKeyShape,
  Digit1: standardKeyShape,
  Digit2: standardKeyShape,
  Digit3: standardKeyShape,
  Digit4: standardKeyShape,
  Digit5: standardKeyShape,
  Digit6: standardKeyShape,
  Digit7: standardKeyShape,
  Digit8: standardKeyShape,
  Digit9: standardKeyShape,
  Digit0: standardKeyShape,
  Minus: standardKeyShape,
  Equal: standardKeyShape,
  Backspace: `M 0 0 H ${KEYCAP_WIDTH * 2} V ${KEYCAP_HEIGHT} H 0 Z`, // Ширина Backspace больше
  Tab: `M 0 0 H ${KEYCAP_WIDTH * 1.5} V ${KEYCAP_HEIGHT} H 0 Z`, // Ширина Tab
  KeyQ: standardKeyShape,
  KeyW: standardKeyShape,
  KeyE: standardKeyShape,
  KeyR: standardKeyShape,
  KeyT: standardKeyShape,
  KeyY: standardKeyShape,
  KeyU: standardKeyShape,
  KeyI: standardKeyShape,
  KeyO: standardKeyShape,
  KeyP: standardKeyShape,
  BracketLeft: standardKeyShape,
  BracketRight: standardKeyShape,
  Backslash: `M 0 0 H ${KEYCAP_WIDTH * 1.5} V ${KEYCAP_HEIGHT} H 0 Z`,
  CapsLock: `M 0 0 H ${KEYCAP_WIDTH * 1.75} V ${KEYCAP_HEIGHT} H 0 Z`,
  KeyA: standardKeyShape,
  KeyS: standardKeyShape,
  KeyD: standardKeyShape,
  KeyF: standardKeyShape,
  KeyG: standardKeyShape,
  KeyH: standardKeyShape,
  KeyJ: standardKeyShape,
  KeyK: standardKeyShape,
  KeyL: standardKeyShape,
  Semicolon: standardKeyShape,
  Quote: standardKeyShape,
  Enter: `M 0 0 H ${KEYCAP_WIDTH * 2.25} V ${KEYCAP_HEIGHT} H 0 Z`,
  ShiftLeft: `M 0 0 H ${KEYCAP_WIDTH * 2.25} V ${KEYCAP_HEIGHT} H 0 Z`,
  IntlBackslash: standardKeyShape,
  KeyZ: standardKeyShape,
  KeyX: standardKeyShape,
  KeyC: standardKeyShape,
  KeyV: standardKeyShape,
  KeyB: standardKeyShape,
  KeyN: standardKeyShape,
  KeyM: standardKeyShape,
  Comma: standardKeyShape,
  Period: standardKeyShape,
  Slash: standardKeyShape,
  ShiftRight: `M 0 0 H ${KEYCAP_WIDTH * 2.75} V ${KEYCAP_HEIGHT} H 0 Z`,
  ControlLeft: `M 0 0 H ${KEYCAP_WIDTH * 1.25} V ${KEYCAP_HEIGHT} H 0 Z`,
  Fn: standardKeyShape,
  MetaLeft: `M 0 0 H ${KEYCAP_WIDTH * 1.25} V ${KEYCAP_HEIGHT} H 0 Z`,
  AltLeft: `M 0 0 H ${KEYCAP_WIDTH * 1.25} V ${KEYCAP_HEIGHT} H 0 Z`,
  Space: `M 0 0 H ${KEYCAP_WIDTH * 6.25} V ${KEYCAP_HEIGHT} H 0 Z`,
  AltRight: `M 0 0 H ${KEYCAP_WIDTH * 1.25} V ${KEYCAP_HEIGHT} H 0 Z`,
  MetaRight: `M 0 0 H ${KEYCAP_WIDTH * 1.25} V ${KEYCAP_HEIGHT} H 0 Z`,
  ContextMenu: `M 0 0 H ${KEYCAP_WIDTH * 1.25} V ${KEYCAP_HEIGHT} H 0 Z`,
  ControlRight: `M 0 0 H ${KEYCAP_WIDTH * 1.25} V ${KEYCAP_HEIGHT} H 0 Z`,
};

// ISO Key Shapes
const keyShapesISO = {
  ...keyShapesANSI,
  ShiftLeft: `M 0 0 H ${KEYCAP_WIDTH * 1.25} V ${KEYCAP_HEIGHT} H 0 Z`,
  Enter: `M 0 0 H ${KEYCAP_WIDTH * 1.5} V ${KEYCAP_HEIGHT * 2 + ROW_GAP} H ${KEYCAP_WIDTH*0.25} V ${KEYCAP_HEIGHT} H 0 Z`,
};

export const getWidthFromPath = (d: string) => {
  // Ищем максимальную ширину в пути, используя регулярное выражение
  const match = d.match(/H (\d+)/); // Находим значение x после H
  return match ? parseInt(match[1], 10) : 40; // Если не нашли, возвращаем стандартную ширину
};

export const createKey = (
  keyCode: KeyCode,
  keyShapes: { [key in KeyCode]: string },
  x: number,
  y: number
): KeyGeometry => {
  return {
    id: keyCode,
    d: keyShapes[keyCode],
    x,
    y,
    rotate: '0',
    legendCoordinates: calculateKeycapLegendPositions(keyShapes[keyCode], 5),
  };
};

export const generateRow = (keys: KeyCode[], rowIndex: number, isISO: boolean = false) => {
  const rowKeys: KeyGeometry[] = [];
  let currentX = 0; // Начальная позиция x для ряда
  const keyShapes = isISO ? keyShapesISO : keyShapesANSI; // Выбор между ISO и ANSI

  keys.forEach((key: KeyCode) => {
    const keyShape = keyShapes[key];
    const keyWidth = getWidthFromPath(keyShape); // Получаем ширину текущей клавиши
    const x = currentX; // Текущая позиция x
    const y = rowIndex * (KEYCAP_HEIGHT + ROW_GAP); // Использование индекса ряда для вычисления y

    rowKeys.push(createKey(key, keyShapes, x, y)); // Создаем клавишу
    currentX += keyWidth + KEYCAP_SPACING; // Обновляем текущую позицию x
  });

  return rowKeys;
};
