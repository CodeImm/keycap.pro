import { ReactNode } from 'react';

import { z } from 'zod';

import { KeyCode, KeyboardLayoutId } from '@/shared/types';

import { SaveKeyboardSettingsRequestSchema } from './schemas';

export type KeycapLegendPosition =
  | 'leftTop'
  | 'leftBottom'
  | 'leftCenter'
  | 'center'
  | 'top'
  | 'bottom'
  | 'rightTop'
  | 'rightBottom'
  | 'rightCenter';

export interface KeyCap {
  id: KeyCode;
  width: number;
  type?: 'special';
  label?: string;
  labelPosition?: KeycapLegendPosition;
  icon?: ReactNode;
  iconPosition?: KeycapLegendPosition;
  indicator?: ReactNode;
  indicatorPosition?: KeycapLegendPosition;
}

export enum System {
  Macos = 'macos',
  Windows = 'windows',
  Linux = 'linux',
}

export enum FormFactor {
  Fullsize = 'fullsize',
  TKL = 'tkl', // Tenkeyless
  SixtyPercent = '60%', // 60%
  SeventyFivePercent = '75%', // 75%
  FortyPercent = '40%', // 40%
  FiftyPercent = '50%', // 50%
  EightyPercent = '80%', // 80%
}

export enum LayoutLanguage {
  English = 'english',
  Russian = 'russian',
}

export interface KeyGeometry {
  id: KeyCode;
  d: string;
  x: number;
  y: number;
  rotate: string;
  legendCoordinates: LegendCoordinates;
}

export type LegendCoordinates = { [key in KeycapLegendPosition]: { x: number; y: number } };

export type KeycapLegends = {
  [key in KeyCode]?: {
    [position in KeycapLegendPosition]?: string;
  };
};

export type LayoutProfiles = {
  id: KeyboardLayoutId;
  name: string;
  language: LayoutLanguage;
  system: System;
  emulated: boolean;
};

export type SaveKeyboardSettingsRequest = z.infer<typeof SaveKeyboardSettingsRequestSchema>;

export type SaveKeyboardSettingsResponse = {};
