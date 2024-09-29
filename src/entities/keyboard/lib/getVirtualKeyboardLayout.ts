import { createAnsiKeyboardLayout, createIsoKeyboardLayout } from '../config/virtualKeyboardLayouts';
import type { KeyboardFormat, System, VirtualKeyboardLayout } from '../model/types';

export function getVirtualKeyboardLayout(type: KeyboardFormat, system: System): VirtualKeyboardLayout {
  if (type === 'ansi') {
    return createAnsiKeyboardLayout(system);
  }

  return createIsoKeyboardLayout(system);
}
