import { parsePath } from './svg';

export function calculateKeycapLegendPositions(path: string, offset: number) {
  const points = parsePath(path);

  // Применяем отступ
  const adjustedPoints = points.map((point) => ({
    x: point.x + (point.x === 0 ? offset : -offset),
    y: point.y + (point.y === 0 ? offset : -offset),
  }));

  const leftTop = adjustedPoints[0];
  const rightTop = adjustedPoints[1];
  const rightBottom = adjustedPoints[2];
  const leftBottom = adjustedPoints[3];

  const center = { x: (leftTop.x + rightTop.x) / 2, y: (leftTop.y + leftBottom.y) / 2 };
  const top = { x: (leftTop.x + rightTop.x) / 2, y: leftTop.y };
  const bottom = { x: (leftBottom.x + rightBottom.x) / 2, y: leftBottom.y };
  const leftCenter = { x: leftTop.x, y: (leftTop.y + leftBottom.y) / 2 };
  const rightCenter = { x: rightTop.x, y: (rightTop.y + rightBottom.y) / 2 };

  return {
    leftTop,
    rightTop,
    rightBottom,
    leftBottom,
    center,
    top,
    bottom,
    leftCenter,
    rightCenter,
  };
}
