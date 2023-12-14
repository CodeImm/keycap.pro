import { layoutLanguages, layoutTypes, layouts } from '@/entities/keyboard';

export const keyboardLayoutDefaultConfig = {
  layoutLanguage: layoutLanguages[0],
  layoutType: layoutTypes[0],
  layoutId: layouts
    .filter((layout) => layout.language === layoutLanguages[0])
    .map((layout) => layout.id)[0],
};
