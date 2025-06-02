import { KeyCode } from '@/shared/types';

import { calculateKeycapLegendPositions } from './getKeycapLegendPositions';
import { getWidthFromPath } from './svg';

import { keyShapesANSI } from '../config/geometry/shapes/ansi';
import { keyShapesISO } from '../config/geometry/shapes/iso';
import { KEYCAP_HEIGHT, KEYCAP_SPACING, ROW_GAP } from '../config/geometry/constants';
import { KeyGeometry } from '../model/types';

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
