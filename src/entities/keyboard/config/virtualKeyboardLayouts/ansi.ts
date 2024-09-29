import { KeyCap, System, VirtualKeyboardLayout } from '../../model/types';

const specialKeysWindows: { [key: string]: KeyCap } = {
  Backspace: { id: 'Backspace', width: 83, type: 'special', label: 'BackSpace', labelPosition: 'center-right' },
  Tab: { id: 'Tab', width: 63, type: 'special', label: 'Tab', labelPosition: 'center-left' },
  CapsLock: { id: 'CapsLock', width: 70, type: 'special', label: 'CapsLock', labelPosition: 'center-left' },
  Enter: { id: 'Enter', width: 95, type: 'special', label: 'Return', labelPosition: 'center-right' },
  ShiftLeft: { id: 'ShiftLeft', width: 92, type: 'special', label: 'Shift', labelPosition: 'center-left' },
  ShiftRight: { id: 'ShiftRight', width: 115, type: 'special', label: 'Shift', labelPosition: 'center-right' },
  ControlLeft: { id: 'ControlLeft', width: 63, type: 'special', label: 'Ctrl', labelPosition: 'center' },
  MetaLeft: { id: 'MetaLeft', width: 40, type: 'special', label: 'Meta', labelPosition: 'center' },
  Fn: { id: 'Fn', width: 40, type: 'special', label: 'Fn', labelPosition: 'center' },
  Space: { id: 'Space', width: 247, type: 'special' },
  AltLeft: { id: 'AltLeft', width: 40, type: 'special', label: 'Alt', labelPosition: 'center' },
  AltRight: { id: 'AltRight', width: 40, type: 'special', label: 'Alt', labelPosition: 'center' },
  MetaRight: { id: 'MetaRight', width: 40, type: 'special', label: 'Meta', labelPosition: 'center' },
  ContextMenu: { id: 'ContextMenu', width: 40, type: 'special' },
  ControlRight: { id: 'ControlRight', width: 63, type: 'special', label: 'Ctrl', labelPosition: 'center' },
};

const specialKeysLinux: { [key: string]: KeyCap } = {
  Backspace: { id: 'Backspace', width: 83, type: 'special', label: 'BackSpace', labelPosition: 'center-right' },
  Tab: { id: 'Tab', width: 63, type: 'special', label: 'Tab', labelPosition: 'center-left' },
  CapsLock: { id: 'CapsLock', width: 70, type: 'special', label: 'CapsLock', labelPosition: 'center-left' },
  Enter: { id: 'Enter', width: 95, type: 'special', label: 'Return', labelPosition: 'center-right' },
  ShiftLeft: { id: 'ShiftLeft', width: 92, type: 'special', label: 'Shift', labelPosition: 'center-left' },
  ShiftRight: { id: 'ShiftRight', width: 115, type: 'special', label: 'Shift', labelPosition: 'center-right' },
  ControlLeft: { id: 'ControlLeft', width: 63, type: 'special', label: 'Ctrl', labelPosition: 'center' },
  MetaLeft: { id: 'MetaLeft', width: 40, type: 'special', label: 'Meta', labelPosition: 'center' },
  Fn: { id: 'Fn', width: 40, type: 'special', label: 'Fn', labelPosition: 'center' },
  Space: { id: 'Space', width: 247, type: 'special' },
  AltLeft: { id: 'AltLeft', width: 40, type: 'special', label: 'Alt', labelPosition: 'center' },
  AltRight: { id: 'AltRight', width: 40, type: 'special', label: 'Alt', labelPosition: 'center' },
  MetaRight: { id: 'MetaRight', width: 40, type: 'special', label: 'Meta', labelPosition: 'center' },
  ContextMenu: { id: 'ContextMenu', width: 40, type: 'special' },
  ControlRight: { id: 'ControlRight', width: 63, type: 'special', label: 'Ctrl', labelPosition: 'center' },
};

const specialKeysMacOS: { [key: string]: KeyCap } = {
  Backspace: { id: 'Backspace', width: 83, type: 'special', label: 'BackSpace', labelPosition: 'center-right' },
  Tab: { id: 'Tab', width: 63, type: 'special', label: 'Tab', labelPosition: 'center-left' },
  CapsLock: { id: 'CapsLock', width: 70, type: 'special', label: 'CapsLock', labelPosition: 'center-left' },
  Enter: { id: 'Enter', width: 95, type: 'special', label: 'Return', labelPosition: 'center-right' },
  ShiftLeft: { id: 'ShiftLeft', width: 92, type: 'special', label: 'Shift', labelPosition: 'center-left' },
  ShiftRight: { id: 'ShiftRight', width: 115, type: 'special', label: 'Shift', labelPosition: 'center-right' },
  ControlLeft: { id: 'ControlLeft', width: 63, type: 'special', label: 'Ctrl', labelPosition: 'center' },
  MetaLeft: { id: 'MetaLeft', width: 40, type: 'special', label: 'Meta', labelPosition: 'center' },
  Fn: { id: 'Fn', width: 40, type: 'special', label: 'Fn', labelPosition: 'center' },
  Space: { id: 'Space', width: 247, type: 'special' },
  AltLeft: { id: 'AltLeft', width: 40, type: 'special', label: 'Alt', labelPosition: 'center' },
  AltRight: { id: 'AltRight', width: 40, type: 'special', label: 'Alt', labelPosition: 'center' },
  MetaRight: { id: 'MetaRight', width: 40, type: 'special', label: 'Meta', labelPosition: 'center' },
  ContextMenu: { id: 'ContextMenu', width: 40, type: 'special' },
  ControlRight: { id: 'ControlRight', width: 63, type: 'special', label: 'Ctrl', labelPosition: 'center' },
};

export const createAnsiKeyboardLayout = (system: System): VirtualKeyboardLayout => {
  let specialKeys = null;

  if (system === System.windows) {
    specialKeys = specialKeysWindows;
  } else if (system === System.linux) {
    specialKeys = specialKeysMacOS;
  } else if (system === System.macos) {
    specialKeys = specialKeysLinux;
  } else {
    specialKeys = specialKeysWindows;
  }

  return {
    row1: [
      { id: 'Backquote', width: 40 },
      { id: 'Digit1', width: 40 },
      { id: 'Digit2', width: 40 },
      { id: 'Digit3', width: 40 },
      { id: 'Digit4', width: 40 },
      { id: 'Digit5', width: 40 },
      { id: 'Digit6', width: 40 },
      { id: 'Digit7', width: 40 },
      { id: 'Digit8', width: 40 },
      { id: 'Digit9', width: 40 },
      { id: 'Digit0', width: 40 },
      { id: 'Minus', width: 40 },
      { id: 'Equal', width: 40 },
      specialKeys.Backspace,
    ],
    row2: [
      specialKeys.Tab,
      { id: 'KeyQ', width: 40 },
      { id: 'KeyW', width: 40 },
      { id: 'KeyE', width: 40 },
      { id: 'KeyR', width: 40 },
      { id: 'KeyT', width: 40 },
      { id: 'KeyY', width: 40 },
      { id: 'KeyU', width: 40 },
      { id: 'KeyI', width: 40 },
      { id: 'KeyO', width: 40 },
      { id: 'KeyP', width: 40 },
      { id: 'BracketLeft', width: 40 },
      { id: 'BracketRight', width: 40 },
      { id: 'Backslash', width: 60 },
    ],
    row3: [
      specialKeys.CapsLock,
      { id: 'KeyA', width: 40 },
      { id: 'KeyS', width: 40 },
      { id: 'KeyD', width: 40 },
      { id: 'KeyF', width: 40 },
      { id: 'KeyG', width: 40 },
      { id: 'KeyH', width: 40 },
      { id: 'KeyJ', width: 40 },
      { id: 'KeyK', width: 40 },
      { id: 'KeyL', width: 40 },
      { id: 'Semicolon', width: 40 },
      { id: 'Quote', width: 40 },
      specialKeys.Enter,
    ],
    row4: [
      specialKeys.ShiftLeft,
      { id: 'KeyZ', width: 40 },
      { id: 'KeyX', width: 40 },
      { id: 'KeyC', width: 40 },
      { id: 'KeyV', width: 40 },
      { id: 'KeyB', width: 40 },
      { id: 'KeyN', width: 40 },
      { id: 'KeyM', width: 40 },
      { id: 'Comma', width: 40 },
      { id: 'Period', width: 40 },
      { id: 'Slash', width: 40 },
      specialKeys.ShiftRight,
    ],
    row5: [
      specialKeys.ControlLeft,
      specialKeys.MetaLeft,
      specialKeys.Fn,
      specialKeys.AltLeft,
      specialKeys.Space,
      specialKeys.AltRight,
      specialKeys.MetaRight,
      specialKeys.ContextMenu,
      specialKeys.ControlRight,
    ],
  };
};
