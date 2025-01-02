import { KeyCode, KeyType, KeyboardLayout, keyCodes } from '@/shared/types';

import { KeycapLegends, System } from '..';

const specialKeysWindows: KeycapLegends = {
  Backspace: { rightCenter: 'BackSpace' },
  Tab: { leftCenter: 'Tab' },
  Enter: { rightCenter: 'Enter' },
  CapsLock: { leftCenter: 'CapsLock' },
  ShiftLeft: { leftCenter: 'Shift' },
  ShiftRight: { rightCenter: 'Shift' },
  ControlLeft: { leftCenter: 'Ctrl' },
  ControlRight: { rightCenter: 'Ctrl' },
  MetaLeft: { leftCenter: 'Win' }, // Изменено на 'Win' для Windows
  MetaRight: { rightCenter: 'Win' },
  AltLeft: { leftCenter: 'Alt' },
  AltRight: { rightCenter: 'Alt' },
  Fn: { leftCenter: 'Fn' },
  Space: {}, // Добавлено название для Space
  ContextMenu: { rightCenter: 'Context Menu' }, // Добавлено название для ContextMenu
};

const specialKeysLinux: KeycapLegends = {
  Backspace: { rightCenter: 'BackSpace' },
  Tab: { leftCenter: 'Tab' },
  Enter: { center: 'Return' },
  CapsLock: { leftCenter: 'CapsLock' },
  ShiftLeft: { leftCenter: 'Shift' },
  ShiftRight: { rightCenter: 'Shift' },
  ControlLeft: { leftCenter: 'Ctrl' },
  ControlRight: { rightCenter: 'Ctrl' },
  MetaLeft: { leftCenter: 'Super' }, // Изменено на 'Super' для Linux
  MetaRight: { rightCenter: 'Super' },
  AltLeft: { leftCenter: 'Alt' },
  AltRight: { rightCenter: 'Alt' },
  Fn: { leftCenter: 'Fn' },
  Space: {},
  ContextMenu: { rightCenter: 'Context Menu' },
};

const specialKeysMacOS: KeycapLegends = {
  Backspace: { rightCenter: 'Delete' }, // Изменено на 'Delete' для Mac
  Tab: { leftCenter: 'Tab' },
  Enter: { center: 'Return' },
  CapsLock: { leftCenter: 'CapsLock' },
  ShiftLeft: { leftCenter: 'Shift' },
  ShiftRight: { rightCenter: 'Shift' },
  ControlLeft: { leftCenter: 'Control' }, // Изменено на 'Control' для Mac
  ControlRight: { rightCenter: 'Control' },
  MetaLeft: { leftCenter: 'Command' }, // Изменено на 'Command' для Mac
  MetaRight: { rightCenter: 'Command' },
  AltLeft: { leftCenter: 'Option' }, // Изменено на 'Option' для Mac
  AltRight: { rightCenter: 'Option' },
  Fn: { leftCenter: 'Fn' },
  Space: {},
  ContextMenu: { rightCenter: 'Context Menu' },
};

export const getKeycapLegends = (layout: KeyboardLayout, system: System): KeycapLegends => {
  let specialKeys;

  if (system === System.Windows) {
    specialKeys = specialKeysWindows;
  } else if (system === System.Linux) {
    specialKeys = specialKeysLinux;
  } else if (system === System.Macos) {
    specialKeys = specialKeysMacOS;
  } else {
    specialKeys = specialKeysWindows;
  }

  return { ...convertLayoutToKeycapLegends(layout), ...specialKeys };
};

function convertLayoutToKeycapLegends(layout: KeyboardLayout): KeycapLegends {
  const keycapLegends: KeycapLegends = {};

  keyCodes.forEach((keyCode: KeyCode) => {
    if (layout.default?.[keyCode].type === KeyType.SPECIAL) {
      return;
    }

    if (layout.default?.[keyCode].type === KeyType.LETTER) {
      keycapLegends[keyCode] = { center: layout.shift?.[keyCode].char };
      return;
    }

    keycapLegends[keyCode] = { leftTop: layout.shift?.[keyCode].char, leftBottom: layout.default?.[keyCode].char };
  });

  return keycapLegends;
}
