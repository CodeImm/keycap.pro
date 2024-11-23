import { ReactNode } from 'react';

import { z } from 'zod';

import { baseKeyIds } from '@/shared/types';

import { SaveKeyboardSettingsRequestSchema } from './schemas';

export const layoutKeyIds = [...baseKeyIds, 'Space'] as const;
export type LayoutKeyId = (typeof layoutKeyIds)[number];

type KeyLabelPosition = 'center' | 'bottom' | 'center-left' | 'center-right';

export type VirtualKeyboardRowName = 'row1' | 'row2' | 'row3' | 'row4' | 'row5';
export interface KeyCap {
  id: LayoutKeyId;
  width: number;
  type?: 'special';
  label?: string;
  labelPosition?: KeyLabelPosition;
  icon?: ReactNode;
  iconPosition?: KeyLabelPosition;
  indicator?: ReactNode;
  indicatorPosition?: KeyLabelPosition;
}
export type VirtualKeyboardLayout = {
  [key in VirtualKeyboardRowName]: KeyCap[];
};

export enum System {
  macos = 'macos',
  windows = 'windows',
  linux = 'linux',
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

export enum Format {
  ISO = 'iso',
  ANSI = 'ansi',
}

export const layoutLanguages = ['english', 'russian'] as const;
export type LayoutLanguage = (typeof layoutLanguages)[number];

// TODO: есть дубликат KeyboardLayoutId 
export enum LayoutId {
  UsQwerty = 'us_qwerty',
  Dvorak = 'dvorak',
  Colemak = 'colemak',
  Workman = 'workman',
  Jcuken = 'jcuken',
}

export const keyboardFormats = ['iso', 'ansi'] as const;
export type KeyboardFormat = (typeof keyboardFormats)[number];

// export enum KeyboardFormat {
//   Iso = 'iso',
//   Ansi = 'ansi',
// }

export type LayoutProfiles = {
  id: LayoutId;
  name: string;
  language: LayoutLanguage;
  system: System;
  emulated: boolean;
};

export type SaveKeyboardSettingsRequest = z.infer<typeof SaveKeyboardSettingsRequestSchema>;

export type SaveKeyboardSettingsResponse = {};
