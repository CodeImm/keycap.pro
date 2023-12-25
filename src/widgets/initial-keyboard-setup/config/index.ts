import {
  layoutLanguages,
  layoutProfiles,
  layoutTypes,
} from '@/entities/keyboard';

export const defaultKeyboardLayoutConfig = {
  layoutLanguage: layoutLanguages[0],
  layoutType: layoutTypes[0],
  layoutId: layoutProfiles
    .filter((layout) => layout.language === layoutLanguages[0])
    .map((layout) => layout.id)[0],
};
