import { KeyInput, KeyboardLayout } from '@/shared/types';

export function restoreCharactersFromKeyInputs(keyInputs: KeyInput[], layout: KeyboardLayout): string {
  return keyInputs.map((key) => layout[key.modifier]?.[key.code]?.char ?? '').join('');
}
