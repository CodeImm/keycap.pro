import { colemak, dvorak, jcuken, us_qwerty, workman} from '@/shared/seeders/KeyboardLayout/data';
import type { LayoutId } from '../model/types';

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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const exhaustiveCheck: never = id;
      throw new Error(`Unknown layout id: ${exhaustiveCheck}`);
    }
  }
}
