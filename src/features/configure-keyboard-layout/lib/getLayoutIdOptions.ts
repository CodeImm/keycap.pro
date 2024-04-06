import {
  LayoutId,
  LayoutLanguage,
  System,
  layoutProfiles,
} from '@/entities/keyboard';
import type { SelectOption } from '@/shared/components';

export function getLayoutIdOptions(
  system: System,
  language: LayoutLanguage
): SelectOption<LayoutId>[] {
  return layoutProfiles
    .filter((profile) => profile.language === language)
    .filter((profile) => profile.system === system)
    .map((profile) => ({
      value: profile.id,
      label: profile.name,
    }));
}
