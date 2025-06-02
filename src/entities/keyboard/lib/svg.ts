export const getWidthFromPath = (d: string) => {
  // Ищем максимальную ширину в пути, используя регулярное выражение
  const match = d.match(/H (\d+)/); // Находим значение x после H
  return match ? parseInt(match[1], 10) : 40; // Если не нашли, возвращаем стандартную ширину
};

export function extractBottomRightCoordinates(pathD: string): { x: number; y: number } {
  const commands = pathD.match(/[MLHVZmlhvz][^MLHVZmlhvz]*/g);

  if (!commands) {
    throw new Error('Invalid pathD string');
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

export function parsePath(d: string) {
  const commands = d.match(/[a-zA-Z][^a-zA-Z]*/g);
  const points: { x: number; y: number }[] = [];

  let currentX = 0;
  let currentY = 0;

  commands?.forEach((command) => {
    const type = command[0];
    const values = command.slice(1).trim().split(' ').map(Number);

    switch (type) {
      case 'M':
        currentX = values[0];
        currentY = values[1];
        points.push({ x: currentX, y: currentY });
        break;
      case 'H':
        currentX = values[0];
        points.push({ x: currentX, y: currentY });
        break;
      case 'V':
        currentY = values[0];
        points.push({ x: currentX, y: currentY });
        break;
      case 'Z':
        // Замыкание пути, возвращаемся к начальной точке
        break;
      default:
        console.warn(`Unsupported command: ${type}`);
    }
  });

  return points;
}
