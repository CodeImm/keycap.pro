import { LayoutLanguage, System, layoutProfiles } from '@/entities/keyboard';
import type { SelectOption } from '@/shared/components';
import { KeyboardLayoutId } from '@/shared/types';

export function getLayoutIdOptions(system: System, language: LayoutLanguage): SelectOption<KeyboardLayoutId>[] | null {
  const options = layoutProfiles
    .filter((profile) => profile.system === system && profile.language === language)
    .map((profile) => ({
      value: profile.id,
      label: profile.name,
    }));

  return options.length > 0 ? options : null;
}
