import { ReactNode } from 'react';

import { z } from 'zod';

import { KeyboardLayoutId, KeyCode } from '@/shared/types';
import { SaveKeyboardSettingsRequestSchema } from './schemas';

type KeyLabelPosition = 'center' | 'bottom' | 'center-left' | 'center-right';

export type VirtualKeyboardRowName = 'row1' | 'row2' | 'row3' | 'row4' | 'row5';
export interface KeyCap {
  id: KeyCode;
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

export type LayoutProfiles = {
  id: KeyboardLayoutId;
  name: string;
  language: LayoutLanguage;
  system: System;
  emulated: boolean;
};

export type SaveKeyboardSettingsRequest = z.infer<typeof SaveKeyboardSettingsRequestSchema>;

export type SaveKeyboardSettingsResponse = {};
