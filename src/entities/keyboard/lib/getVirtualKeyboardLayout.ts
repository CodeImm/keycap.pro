import { KeyboardFormat } from '@/shared/types';

import { createAnsiKeyboardLayout, createIsoKeyboardLayout } from '../config/virtualKeyboardLayouts';
import { System, VirtualKeyboardLayout } from '../model/types';

export function getVirtualKeyboardLayout(type: KeyboardFormat, system: System): VirtualKeyboardLayout {
  console.log(system);
  if (type === KeyboardFormat.Ansi) {
    return createAnsiKeyboardLayout(system);
  }

  return createIsoKeyboardLayout(system);
}
