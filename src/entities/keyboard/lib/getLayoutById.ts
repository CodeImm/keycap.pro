import {
  colemak,
  dvorak,
  jcuken,
  us_qwerty,
  workman,
} from '../config/keyboardLayouts';
import type { LayoutId } from '../model';

export function getLayoutById(id: LayoutId) {
  switch (id) {
    case 'us_qwerty':
      return us_qwerty;
    case 'dvorak':
      return dvorak;
    case 'colemak':
      return colemak;
    case 'workman':
      return workman;
    case 'jcuken':
      return jcuken;
    default: {
      const exhaustiveCheck: never = id;
      throw new Error(`Unknown layout id: ${exhaustiveCheck}`);
    }
  }
}
