import { memo } from 'react';

import Key from './Key';
import SpecialKey from './SpecialKey';

import type {
  Finger,
  FingerColorMapping,
  KeyFingerMapping,
  Layout,
  LayoutType,
  VirtualKeyboardLayout,
  VirtualKeyboardRowName,
} from '../../model';

interface Props {
  y: number;
  rowKeys: VirtualKeyboardLayout[VirtualKeyboardRowName];
  layout: Layout;
  layoutType: LayoutType;
  excludedKeys: string[];
  homeKeys: string[];
  keyFingerMapping?: KeyFingerMapping;
  fingerColorMapping?: FingerColorMapping;
}

const KeyboardRow = memo(function KeyboardRow({
  y,
  rowKeys,
  layout,
  layoutType,
  excludedKeys,
  homeKeys,
  keyFingerMapping,
  fingerColorMapping,
}: Props) {
  let widthAdder = 0;

  const getFill = (id: string) => {
    if (!fingerColorMapping || !keyFingerMapping) return undefined;

    const finger = keyFingerMapping[id] as Finger;

    return fingerColorMapping[finger];
  };

  const isLetter = (id: string) =>
    layout.default?.[id]?.type === 'letter' &&
    layout.shift?.[id]?.type === 'letter';

  const isVisible = (id: string) => !excludedKeys.includes(id);

  const isHoming = (id: string) => id === homeKeys[0] || id === homeKeys[1];

  return (
    <>
      {rowKeys.map((key, index) => {
        const { id, width, type, label } = key;
        widthAdder += width;

        const fill =
          getFill(id) || (type === 'special' ? '#e3e3e1' : undefined);

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
            layoutType={layoutType}
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
            bottomLeftLabel={
              isLetter(id) ? undefined : layout.default?.[id]?.key
            }
            bottomRightLabel={undefined}
            homing={isHoming(id)}
            visible={isVisible(id)}
            fill={fill}
            rightHandMark={keyFingerMapping?.[id] && keyFingerMapping?.[id] > 4}
            sx={{ cursor: keyFingerMapping ? 'pointer' : 'default' }}
          />
        );
      })}
    </>
  );
});

export default KeyboardRow;
