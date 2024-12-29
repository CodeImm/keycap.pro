import { KeyboardFormat, LayoutId, LayoutLanguage, System, layoutProfiles } from '@/entities/keyboard';

// TODO: есть еще возможно лишний getDefaultLayoutConfig или можно их объеденить
export const defaultKeyboardLayoutConfig = {
  system: System.windows,
  layoutLanguage: LayoutLanguage.English,
  keyboardFormat: KeyboardFormat.Ansi,
  layoutId: layoutProfiles
    .filter((profile) => profile.language === LayoutLanguage.English && profile.system === System.windows)
    .map((layout) => layout.id)[0],
};

export interface KeyboardLayoutConfig {
  system: System;
  layoutLanguage: LayoutLanguage;
  keyboardFormat: KeyboardFormat;
  layoutId: LayoutId;
}
