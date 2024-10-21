import { BoxProps } from '@mui/material/Box';

import { FingerColorMapping, KeyFingerMappingScheme } from '@/entities/keyFingerMapping';

import IsoEnter from './IsoEnter';
import Key from './Key';
import SpaceDivider from './SpaceDivider';

import { KeyboardFormat } from '../../model/types';

interface Props extends BoxProps {
  id: string;
  widthAdder: number;
  index: number;
  y: number;
  width: number;
  height: number;
  keyboardFormat: KeyboardFormat;
  label?: string;
  homing?: boolean;
  visible?: boolean;
  fill?: string;
  fontColor?: string;
  keyFingerMapping?: KeyFingerMappingScheme;
  fingerColorMapping?: FingerColorMapping;
}

function SpecialKey({
  id,
  index,
  widthAdder,
  y,
  width,
  height,
  keyboardFormat,
  label,
  homing,
  visible,
  fill,
  keyFingerMapping,
  fingerColorMapping,
}: Props) {
  const isIsoEnter = id === 'Enter' && keyboardFormat === 'iso';
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        rightHandMark={keyFingerMapping?.[id]! > 4}
        sx={{ cursor: keyFingerMapping ? 'pointer' : 'default' }}
      />
    );
  }

  if (isSpaceKey && keyFingerMapping) {
    const leftId = `${id}_Left`;
    const rightId = `${id}_Right`;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const leftFill = fingerColorMapping?.[keyFingerMapping[leftId]!];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
          rightHandMark={keyFingerMapping?.[leftId]! > 4}
          sx={{ cursor: 'pointer' }}
        />
        <SpaceDivider x={widthAdder - (width - 1) / 2 + 2 * index - 1} y={y + 2} />
        <Key
          id={rightId}
          x={widthAdder - (width - 1) / 2 + 2 * index}
          y={y}
          height={height}
          homing={false}
          width={(width - 1) / 2}
          fill={rightFill}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      rightHandMark={keyFingerMapping?.[id]! > 4}
      sx={{ cursor: keyFingerMapping ? 'pointer' : 'default' }}
    />
  );
}

export default SpecialKey;
