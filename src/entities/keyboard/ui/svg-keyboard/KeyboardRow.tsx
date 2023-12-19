import { Fragment, memo } from 'react';

import IsoEnter from './IsoEnter';
import Key from './Key';
import SpaceDivider from './SpaceDivider';

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
  keyData: Layout;
  layoutType: LayoutType;
  excludedKeys: string[];
  homeKeys: string[];
  keyFingerMapping?: KeyFingerMapping;
  fingerColorMapping?: FingerColorMapping;
}

const KeyboardRow = memo(function KeyboardRow({
  y,
  rowKeys,
  keyData,
  layoutType,
  excludedKeys,
  homeKeys,
  keyFingerMapping,
  fingerColorMapping,
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

        const fill =
          fingerColorMapping && keyFingerMapping
            ? fingerColorMapping[keyFingerMapping[id] as Finger]
            : sys
            ? '#e3e3e1'
            : undefined;

        return id === 'Enter' && layoutType === 'iso' ? (
          <IsoEnter
            id={id}
            key={id}
            x={widthAdder - width + 2 * index}
            y={y}
            height={40}
            width={width}
            label={keyData.default?.[id]?.key}
            fill={fill}
            rightHandMark={keyFingerMapping?.[id]! > 4}
            sx={{ cursor: keyFingerMapping ? 'pointer' : 'default' }}
          />
        ) : keyFingerMapping && id === 'Space' ? (
          <Fragment key={id}>
            <Key
              id={`${id}_Left`}
              x={widthAdder - width + 2 * index}
              y={y}
              height={40}
              homing={false}
              width={(width - 1) / 2}
              fill={fingerColorMapping?.[keyFingerMapping[`${id}_Left`]!]}
              rightHandMark={keyFingerMapping?.[`${id}_Left`]! > 4}
              sx={{ cursor: 'pointer' }}
            />
            <SpaceDivider
              x={widthAdder - (width - 1) / 2 + 2 * index - 1}
              y={y + 2}
            />
            )
            <Key
              id={`${id}_Right`}
              x={widthAdder - (width - 1) / 2 + 2 * index}
              y={y}
              height={40}
              homing={false}
              width={(width - 1) / 2}
              fill={fingerColorMapping?.[keyFingerMapping[`${id}_Right`]!]}
              rightHandMark={keyFingerMapping?.[`${id}_Right`]! > 4}
              sx={{ cursor: 'pointer' }}
            />
          </Fragment>
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
            fill={fill}
            rightHandMark={keyFingerMapping?.[id]! > 4}
            sx={{ cursor: keyFingerMapping ? 'pointer' : 'default' }}
          />
        );
      })}
    </>
  );
});

export default KeyboardRow;
