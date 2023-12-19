import { ansiLayout, isoLayout } from '../config/virtualKeyboardLayouts';
import type { LayoutType } from '../model';

export function getVirtualKeyboardLayoutById(id: LayoutType) {
  switch (id) {
    case 'iso':
      return isoLayout;
    case 'ansi':
      return ansiLayout;
    default:
      const exhaustiveCheck: never = id;
      throw new Error(`Unknown layoutType id: ${exhaustiveCheck}`);
  }
}
