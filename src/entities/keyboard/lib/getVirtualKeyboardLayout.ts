import { createAnsiKeyboardLayout, createIsoKeyboardLayout } from '../config/virtualKeyboardLayouts';
import type { LayoutType, System, VirtualKeyboardLayout } from '../model';

export function getVirtualKeyboardLayout(type: LayoutType, system: System): VirtualKeyboardLayout {
  if (type === 'ansi') {
    return createAnsiKeyboardLayout(system);
  }

  return createIsoKeyboardLayout(system);
}
