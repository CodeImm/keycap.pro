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
  Enter: `M 0 0 H ${KEYCAP_WIDTH * 1.5} V ${KEYCAP_HEIGHT * 2 + ROW_GAP} H ${
    KEYCAP_WIDTH * 0.25
  } V ${KEYCAP_HEIGHT} H 0 Z`,
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

export function extractBottomRightCoordinates(pathD: string): { x: number; y: number } {
  const commands = pathD.match(/[MLHVZmlhvz][^MLHVZmlhvz]*/g);

  if (!commands) {
    throw new Error("Invalid pathD string");
  }

  let currentX = 0,
    currentY = 0; // Текущие координаты
  let startX = 0,
    startY = 0; // Координаты начала контура
  let maxX = -Infinity,
    maxY = -Infinity; // Максимальные координаты

  for (const command of commands) {
    const type = command[0]; // Тип команды
    const params = command
      .slice(1)
      .trim()
      .split(/[\s,]+/)
      .map(Number);

    switch (type) {
      case 'M': // Absolute Move To
        [currentX, currentY] = params;
        startX = currentX;
        startY = currentY;
        break;
      case 'm': // Relative Move To
        currentX += params[0];
        currentY += params[1];
        startX = currentX;
        startY = currentY;
        break;
      case 'L': // Absolute Line To
        [currentX, currentY] = params;
        break;
      case 'l': // Relative Line To
        currentX += params[0];
        currentY += params[1];
        break;
      case 'H': // Absolute Horizontal Line To
        currentX = params[0];
        break;
      case 'h': // Relative Horizontal Line To
        currentX += params[0];
        break;
      case 'V': // Absolute Vertical Line To
        currentY = params[0];
        break;
      case 'v': // Relative Vertical Line To
        currentY += params[0];
        break;
      case 'Z': // Close Path
      case 'z': // Close Path
        currentX = startX;
        currentY = startY;
        break;
      default:
        throw new Error(`Unsupported path command: ${type}`);
    }

    // Обновление максимальных координат
    maxX = Math.max(maxX, currentX);
    maxY = Math.max(maxY, currentY);
  }

  return { x: maxX, y: maxY };
}
