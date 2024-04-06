import {
  layoutLanguages,
  layoutProfiles,
  layoutTypes,
  system,
} from '@/entities/keyboard';

export const defaultKeyboardLayoutConfig = {
  system: system[0],
  layoutLanguage: layoutLanguages[0],
  layoutType: layoutTypes[0],
  layoutId: layoutProfiles
    .filter((profile) => profile.language === layoutLanguages[0])
    .filter((profile) => profile.system === system[0])
    .map((layout) => layout.id)[0],
};
