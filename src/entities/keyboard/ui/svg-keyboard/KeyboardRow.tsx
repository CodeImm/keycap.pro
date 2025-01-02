import { memo } from 'react';

import { Finger, FingerColorMapping, KeyCode, KeyFingerMapping, KeyType, KeyboardLayout } from '@/shared/types';

import Key from './Key';

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

    const finger = keyFingerMapping[keyCode] as Finger[];

    return fingerColorMapping[finger];
  };
  const isVisible = (keyCode: KeyCode) => !excludedKeys.includes(keyCode);

  const isHomingKey = (keyCode: KeyCode) => homingKeys.includes(keyCode);

  return rowKeys.map(({ id, ...properties }) => {
    const fill = getFill(id) || (layout.default?.[id].type === KeyType.SPECIAL ? '#e3e3e1' : undefined);

    return (
      <Key
        id={id}
        {...properties}
        legend={legends[id]}
        homing={isHomingKey(id)}
        visible={isVisible(id)}
        fill={fill}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        rightHandMark={keyFingerMapping?.[id] && keyFingerMapping?.[id] > 4}
        sx={{ cursor: keyFingerMapping ? 'pointer' : 'default' }}
      />
    );
  });
});

export default KeyboardRow;
