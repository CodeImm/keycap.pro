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
): SelectOption<LayoutId>[] | null {
  const options = layoutProfiles
    .filter(profile => profile.system === system && profile.language === language)
    .map(profile => ({
      value: profile.id,
      label: profile.name,
    }));

  return options.length > 0 ? options : null;
}
