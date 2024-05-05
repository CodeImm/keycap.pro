import {
  System,
  layoutLanguages,
  layoutProfiles,
  layoutTypes,
} from '@/entities/keyboard';

// TODO: есть еще возможно лишний getDefaultLayoutConfig или можно их объеденить
export const defaultKeyboardLayoutConfig = {
  system: System.windows,
  layoutLanguage: layoutLanguages[0],
  layoutType: layoutTypes[0],
  layoutId: layoutProfiles
    .filter((profile) => profile.language === layoutLanguages[0])
    .filter((profile) => profile.system === System.windows)
    .map((layout) => layout.id)[0],
};
