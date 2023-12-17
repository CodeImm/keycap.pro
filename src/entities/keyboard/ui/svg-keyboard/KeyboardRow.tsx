import { memo } from 'react';

import IsoEnter from './IsoEnter';
import Key from './Key';

import type {
  Layout,
  LayoutType,
  VirtualKeyboardLayout,
  VirtualKeyboardRowName,
} from '../../model';

interface Props {
  y: number;
  rowKeys: VirtualKeyboardLayout[VirtualKeyboardRowName];
  keyData: Layout;
  layoutType: LayoutType;
  excludedKeys: string[];
  homeKeys: string[];
}

const KeyboardRow = memo(function KeyboardRow({
  y,
  rowKeys,
  keyData,
  layoutType,
  excludedKeys,
  homeKeys,
}: Props) {
  let widthAdder = 0;

  return (
    <>
      {rowKeys.map(({ id, width }, index) => {
        widthAdder += width;

        const visible = !excludedKeys.includes(id);

        const homing = id === homeKeys[0] || id === homeKeys[1];

        const letter =
          keyData.default?.[id]?.type === 'letter' &&
          keyData.shift?.[id]?.type === 'letter';

        const sys = keyData.default?.[id]?.type === 'sys';

        return id === 'Enter' && layoutType === 'iso' ? (
          <IsoEnter
            id={id}
            key={id}
            x={widthAdder - width + 2 * index}
            y={y}
            height={40}
            label={keyData.default?.[id]?.key}
          />
        ) : (
          <Key
            id={id}
            key={id}
            x={widthAdder - width + 2 * index}
            y={y}
            height={40}
            width={width}
            centerLabel={letter ? keyData.shift?.[id]?.key : undefined}
            topLeftLabel={!letter ? keyData.shift?.[id]?.key : undefined}
            bottomLeftLabel={
              !letter && !sys ? keyData.default?.[id]?.key : undefined
            }
            bottomRightLabel={undefined}
            centerLeftLabel={sys ? keyData.default?.[id]?.key : undefined}
            homing={homing}
            visible={visible}
            fill={sys ? '#e3e3e1' : undefined}
          />
        );
      })}
    </>
  );
});

export default KeyboardRow;
