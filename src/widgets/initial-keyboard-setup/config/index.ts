import {
  KeyboardFormat,
  LayoutId,
  LayoutLanguage,
  System,
  keyboardFormats,
  layoutLanguages,
  layoutProfiles,
} from '@/entities/keyboard';

// TODO: есть еще возможно лишний getDefaultLayoutConfig или можно их объеденить
export const defaultKeyboardLayoutConfig = {
  system: System.windows,
  layoutLanguage: layoutLanguages[0],
  keyboardFormat: keyboardFormats[0],
  layoutId: layoutProfiles
    .filter((profile) => profile.language === layoutLanguages[0])
    .filter((profile) => profile.system === System.windows)
    .map((layout) => layout.id)[0],
};

export interface KeyboardLayoutConfig {
  system: System;
  layoutLanguage: LayoutLanguage;
  keyboardFormat: KeyboardFormat;
  layoutId: LayoutId;
}
