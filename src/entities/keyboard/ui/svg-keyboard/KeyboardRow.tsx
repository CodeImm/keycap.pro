import { memo } from 'react';

import { FingerColorMapping, KeyFingerMappingScheme } from '@/entities/keyFingerMapping';

import Key from './Key';
import SpecialKey from './SpecialKey';

import type { KeyboardFormat, Layout, VirtualKeyboardLayout, VirtualKeyboardRowName } from '../../model/types';
import { Finger } from '@/shared/types';

interface Props {
  y: number;
  rowKeys: VirtualKeyboardLayout[VirtualKeyboardRowName];
  layout: Layout;
  keyboardFormat: KeyboardFormat;
  excludedKeys: string[];
  homeKeys: string[];
  keyFingerMapping?: KeyFingerMappingScheme;
  fingerColorMapping?: FingerColorMapping;
}

const KeyboardRow = memo(function KeyboardRow({
  y,
  rowKeys,
  layout,
  keyboardFormat,
  excludedKeys,
  homeKeys,
  keyFingerMapping,
  fingerColorMapping,
}: Props) {
  let widthAdder = 0;

  const getFill = (id: keyof KeyFingerMappingScheme) => {
    if (!fingerColorMapping || !keyFingerMapping) return undefined;

    const finger = keyFingerMapping[id] as Finger;

    return fingerColorMapping[finger];
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const isLetter = (id: any) => layout.default?.[id]?.type === 'letter' && layout.shift?.[id]?.type === 'letter';

  const isVisible = (id: string) => !excludedKeys.includes(id);

  const isHoming = (id: string) => id === homeKeys[0] || id === homeKeys[1];

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
            homing={isHoming(id)}
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
            centerLabel={isLetter(id) ? layout.shift?.[id]?.key : undefined}
            topLeftLabel={isLetter(id) ? undefined : layout.shift?.[id]?.key}
            bottomLeftLabel={isLetter(id) ? undefined : layout.default?.[id]?.key}
            bottomRightLabel={undefined}
            homing={isHoming(id)}
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
