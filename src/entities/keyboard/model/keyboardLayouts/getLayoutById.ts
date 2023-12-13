import { colemak } from './colemak';
import { dvorak } from './dvorak';
import { jcuken } from './jcuken';
import { us_qwerty } from './us_qwerty';
import { workman } from './workman';

import type { LayoutId } from '..';

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
    default:
      throw new Error(`Unknown layout id: ${id}`);
  }
}
