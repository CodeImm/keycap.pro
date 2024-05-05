import { Fragment } from 'react';

import { BoxProps } from '@mui/material/Box';

import IsoEnter from './IsoEnter';
import Key from './Key';
import SpaceDivider from './SpaceDivider';

import { FingerColorMapping, KeyFingerMapping, LayoutType } from '../../model';

interface Props extends BoxProps {
  id: string;
  widthAdder: number;
  index: number;
  y: number;
  width: number;
  height: number;
  layoutType: LayoutType;
  label?: string;
  homing?: boolean;
  visible?: boolean;
  fill?: string;
  fontColor?: string;
  keyFingerMapping?: KeyFingerMapping;
  fingerColorMapping?: FingerColorMapping;
}

function SpecialKey({
  id,
  index,
  widthAdder,
  y,
  width,
  height,
  layoutType,
  label,
  homing,
  visible,
  fill,
  keyFingerMapping,
  fingerColorMapping,
}: Props) {
  const isIsoEnter = id === 'Enter' && layoutType === 'iso';
  const isSpaceKey = id === 'Space';

  if (isIsoEnter) {
    return (
      <IsoEnter
        id={id}
        key={id}
        x={widthAdder - width + 2 * index}
        y={y}
        height={40}
        width={width}
        label={label}
        fill={fill}
        rightHandMark={keyFingerMapping?.[id]! > 4}
        sx={{ cursor: keyFingerMapping ? 'pointer' : 'default' }}
      />
    );
  }

  if (isSpaceKey && keyFingerMapping) {
    const leftId = `${id}_Left`;
    const rightId = `${id}_Right`;
    const leftFill = fingerColorMapping?.[keyFingerMapping[leftId]!];
    const rightFill = fingerColorMapping?.[keyFingerMapping[rightId]!];

    return (
      <>
        <Key
          id={leftId}
          x={widthAdder - width + 2 * index}
          y={y}
          height={height}
          homing={false}
          width={(width - 1) / 2}
          fill={leftFill}
          rightHandMark={keyFingerMapping?.[leftId]! > 4}
          sx={{ cursor: 'pointer' }}
        />
        <SpaceDivider
          x={widthAdder - (width - 1) / 2 + 2 * index - 1}
          y={y + 2}
        />
        <Key
          id={rightId}
          x={widthAdder - (width - 1) / 2 + 2 * index}
          y={y}
          height={height}
          homing={false}
          width={(width - 1) / 2}
          fill={rightFill}
          rightHandMark={keyFingerMapping?.[rightId]! > 4}
          sx={{ cursor: 'pointer' }}
        />
      </>
    );
  }

  return (
    <Key
      id={id}
      key={id}
      x={widthAdder - width + 2 * index}
      y={y}
      height={height}
      width={width}
      centerLabel={label}
      bottomRightLabel={undefined}
      homing={homing}
      visible={visible}
      fill={fill}
      rightHandMark={keyFingerMapping?.[id]! > 4}
      sx={{ cursor: keyFingerMapping ? 'pointer' : 'default' }}
    />
  );
}

export default SpecialKey;
