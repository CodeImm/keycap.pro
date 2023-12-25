import { LayoutKeyId } from '../model';

export { layoutProfiles } from './layoutProfiles';
export { keyFingerMapping, fingerColorMapping } from './keyboardMappings';

export const DEFAULT_EXCLUDED_KEYS: LayoutKeyId[] = [
  'MetaLeft',
  'Fn',
  'MetaRight',
  'ContextMenu',
];

export const DEFAULT_HOME_KEYS: LayoutKeyId[] = ['KeyF', 'KeyJ'];
