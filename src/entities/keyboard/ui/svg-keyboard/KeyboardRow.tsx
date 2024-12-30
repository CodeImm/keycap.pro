import { memo } from 'react';

import { Finger, FingerColorMapping, KeyCode, KeyFingerMapping, KeyboardFormat, KeyboardLayout } from '@/shared/types';

import Key from './Key';
import SpecialKey from './SpecialKey';

import type { VirtualKeyboardLayout, VirtualKeyboardRowName } from '../../model/types';

interface Props {
  y: number;
  rowKeys: VirtualKeyboardLayout[VirtualKeyboardRowName];
  layout: KeyboardLayout;
  keyboardFormat: KeyboardFormat;
  excludedKeys: string[];
  homingKeys: KeyCode[];
  keyFingerMapping?: KeyFingerMapping;
  fingerColorMapping?: FingerColorMapping;
}

const KeyboardRow = memo(function KeyboardRow({
  y,
  rowKeys,
  layout,
  keyboardFormat,
  excludedKeys,
  homingKeys,
  keyFingerMapping,
  fingerColorMapping,
}: Props) {
  let widthAdder = 0;

  const getFill = (keyCode: keyof KeyFingerMapping) => {
    if (!fingerColorMapping || !keyFingerMapping) return undefined;

    const finger = keyFingerMapping[keyCode] as Finger[];

    return fingerColorMapping[finger];
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const isLetter = (id: any) => layout.default?.[id]?.type === 'letter' && layout.shift?.[id]?.type === 'letter';

  const isVisible = (id: string) => !excludedKeys.includes(id);

  const isHomingKey = (keyCode: KeyCode) => homingKeys.includes(keyCode);

  return (
    <>
      {rowKeys.map((key, index) => {
        const { id, width, type, label } = key;
        widthAdder += width;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const fill = getFill(id) || (type === 'special' ? '#e3e3e1' : undefined);

        return type === 'special' ? (
          <SpecialKey
            key={id}
            id={id}
            index={index}
            widthAdder={widthAdder}
            y={y}
            height={40}
            width={width}
            label={label}
            keyboardFormat={keyboardFormat}
            homing={isHomingKey(id)}
            visible={isVisible(id)}
            fill={fill}
            fingerColorMapping={fingerColorMapping}
            keyFingerMapping={keyFingerMapping}
          />
        ) : (
          <Key
            id={id}
            key={id}
            x={widthAdder - width + 2 * index}
            y={y}
            height={40}
            width={width}
            centerLabel={isLetter(id) ? layout.shift?.[id]?.char : undefined}
            topLeftLabel={isLetter(id) ? undefined : layout.shift?.[id]?.char}
            bottomLeftLabel={isLetter(id) ? undefined : layout.default?.[id]?.char}
            bottomRightLabel={undefined}
            homing={isHomingKey(id)}
            visible={isVisible(id)}
            fill={fill}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            rightHandMark={keyFingerMapping?.[id] && keyFingerMapping?.[id] > 4}
            sx={{ cursor: keyFingerMapping ? 'pointer' : 'default' }}
          />
        );
      })}
    </>
  );
});

export default KeyboardRow;
