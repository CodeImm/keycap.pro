import { createAnsiKeyboardLayout, createIsoKeyboardLayout } from '../config/virtualKeyboardLayouts';
import { KeyboardFormat, System, VirtualKeyboardLayout } from '../model/types';

export function getVirtualKeyboardLayout(type: KeyboardFormat, system: System): VirtualKeyboardLayout {
  if (type === KeyboardFormat.Ansi) {
    return createAnsiKeyboardLayout(system);
  }

  return createIsoKeyboardLayout(system);
}
