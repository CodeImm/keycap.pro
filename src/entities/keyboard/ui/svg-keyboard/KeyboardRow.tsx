import { memo } from 'react';

import { Finger, FingerColorMapping, KeyCode, KeyFingerMapping, KeyType, KeyboardLayout } from '@/shared/types';

import Key from './Key';
import SpaceDivider from './SpaceDivider';

import type { KeyGeometry, KeycapLegends } from '../../model/types';

interface Props {
  rowKeys: KeyGeometry[];
  legends: KeycapLegends;
  excludedKeys: KeyCode[];
  layout: KeyboardLayout;
  homingKeys: KeyCode[];
  keyFingerMapping?: KeyFingerMapping;
  fingerColorMapping?: FingerColorMapping;
}

const KeyboardRow = memo(function KeyboardRow({
  rowKeys,
  legends,
  excludedKeys,
  layout,
  homingKeys,
  keyFingerMapping,
  fingerColorMapping,
}: Props) {
  const getFill = (keyCode: keyof KeyFingerMapping) => {
    if (!fingerColorMapping || !keyFingerMapping) return undefined;

    return keyFingerMapping[keyCode]?.map((finger) => fingerColorMapping[finger as Finger]);
  };

  const isVisible = (keyCode: KeyCode) => !excludedKeys.includes(keyCode);

  const isHomingKey = (keyCode: KeyCode) => homingKeys.includes(keyCode);

  return rowKeys.flatMap(({ id, ...properties }) => {
    const fills = getFill(id);

    if (fills?.length === 2) {
      const [leftPart, rightPart] = splitKeyGeometry(properties.x, properties.y, properties.d);

      return [
        <Key
          key={`${id}_1`}
          id={`${id}_1`}
          {...Object.assign(properties, leftPart)}
          legend={legends[id]}
          homing={isHomingKey(id)}
          visible={isVisible(id)}
          fill={fills[0]}
          sx={{ cursor: keyFingerMapping ? 'pointer' : 'default' }}
          rightHandMark={!!keyFingerMapping?.[id]?.[0] && keyFingerMapping?.[id][0] > 4}
        />,
        <Key
          key={`${id}_2`}
          id={`${id}_2`}
          {...Object.assign(properties, rightPart)}
          legend={legends[id]}
          homing={isHomingKey(id)}
          visible={isVisible(id)}
          fill={fills[1]}
          sx={{ cursor: keyFingerMapping ? 'pointer' : 'default' }}
          rightHandMark={!!keyFingerMapping?.[id]?.[1] && keyFingerMapping?.[id][1] > 4}
        />,
        <SpaceDivider key={`${id}_divider`} x={rightPart.x} y={rightPart.y} />,
      ];
    }

    const fill = fills?.[0] || (layout.default?.[id].type === KeyType.SPECIAL ? '#e3e3e1' : undefined);

    return (
      <Key
        key={id}
        id={id}
        {...properties}
        legend={legends[id]}
        homing={isHomingKey(id)}
        visible={isVisible(id)}
        fill={fill}
        rightHandMark={!!keyFingerMapping?.[id]?.[0] && keyFingerMapping?.[id][0] > 4}
        sx={{ cursor: keyFingerMapping ? 'pointer' : 'default' }}
      />
    );
  });
});

export default KeyboardRow;

// TODO: унифицировать для любого path d
const splitKeyGeometry = (x: number, y: number, d: string): { x: number; y: number; d: string }[] => {
  // Парсим путь d для извлечения ширины и высоты
  const match = d.match(/M 0 0 H ([\d.]+) V ([\d.]+) H 0 Z/);
  if (!match) {
    throw new Error('Invalid path format. Expected path format "M 0 0 H {width} V {height} H 0 Z".');
  }

  const width = parseFloat(match[1]);
  const height = parseFloat(match[2]);
  const halfWidth = width / 2;

  // Формируем путь для левой половины
  const leftD = `M 0 0 H ${halfWidth} V ${height} H 0 Z`;

  // Формируем путь для правой половины
  const rightD = `M 0 0 H ${halfWidth} V ${height} H 0 Z`;

  return [
    { x, y, d: leftD },
    { x: x + halfWidth, y, d: rightD },
  ];
};
