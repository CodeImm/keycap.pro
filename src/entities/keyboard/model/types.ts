import { ReactNode } from 'react';

import { z } from 'zod';

import { SaveKeyboardSettingsRequestSchema } from './schemas';

export const layoutKeyIds = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Enter',
  'ShiftLeft',
  'IntlBackslash',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'Fn',
  'AltLeft',
  'Space',
  'AltRight',
  'MetaRight',
  'ContextMenu',
  'ControlRight',
] as const;

// TODO: проверить правильно ли используется т.к. нет Space (но он был)
export const fingerMappingKeyIds = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Enter',
  'ShiftLeft',
  'IntlBackslash',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'Fn',
  'AltLeft',
  // 'Space',
  'AltRight',
  'MetaRight',
  'ContextMenu',
  'ControlRight',
  'Space_Right', //
  'Space_Left', //
] as const;

export type LayoutKeyId = (typeof layoutKeyIds)[number];

export type LayoutKeyType = 'letter' | 'symbol' | 'special' | 'digit';

export type LayoutKeyInfo = {
  [key in LayoutKeyId]?: {
    key: string;
    type: LayoutKeyType;
    alternate?: LayoutKeyId;
  };
};

export type ShiftState = 'shift' | 'default';

export type Layout = { [key in ShiftState]: LayoutKeyInfo };

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

export enum Finger {
  LEFT_PINKIE,
  LEFT_RING,
  LEFT_MIDDLE,
  LEFT_INDEX,
  LEFT_THUMB,
  RIGHT_THUMB,
  RIGHT_INDEX,
  RIGHT_MIDDLE,
  RIGHT_RING,
  RIGHT_PINKIE,
}

export type KeyFingerMapping = {
  [key in Exclude<LayoutKeyId, 'Space'> | 'Space_Left' | 'Space_Right']?: Finger;
};

export type FingerColorMapping = {
  [key in Finger]: string;
};

export enum System {
  macos = 'macos',
  windows = 'windows',
  linux = 'linux',
}

export const layoutLanguages = ['english', 'russian'] as const;
export type LayoutLanguage = (typeof layoutLanguages)[number];

export const layoutIds = ['us_qwerty', 'dvorak', 'colemak', 'workman', 'jcuken'] as const;
export type LayoutId = (typeof layoutIds)[number];

export const keyFingerMappingIds = ['optimized', 'logical', 'custom'] as const;
export type KeyFingerMappingId = (typeof keyFingerMappingIds)[number];

export const keyboardFormats = ['iso', 'ansi'] as const;
export type KeyboardFormat = (typeof keyboardFormats)[number];

export type LayoutProfiles = {
  id: LayoutId;
  name: string;
  language: LayoutLanguage;
  system: System;
  emulated: boolean;
};

export type SaveKeyboardSettingsRequest = z.infer<typeof SaveKeyboardSettingsRequestSchema>;

export type SaveKeyboardSettingsResponse = {};
