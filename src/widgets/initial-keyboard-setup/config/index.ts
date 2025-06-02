import { LayoutLanguage, System, layoutProfiles } from '@/entities/keyboard';
import { KeyboardFormat, KeyboardLayoutId } from '@/shared/types';

// TODO: есть еще возможно лишний getDefaultLayoutConfig или можно их объеденить
export const defaultKeyboardLayoutConfig = {
  system: System.Windows,
  layoutLanguage: LayoutLanguage.English,
  keyboardFormat: KeyboardFormat.Ansi,
  layoutId: layoutProfiles
    .filter((profile) => profile.language === LayoutLanguage.English && profile.system === System.Windows)
    .map((layout) => layout.id)[0],
};

export interface KeyboardLayoutConfig {
  system: System;
  layoutLanguage: LayoutLanguage;
  keyboardFormat: KeyboardFormat;
  layoutId: KeyboardLayoutId;
}
