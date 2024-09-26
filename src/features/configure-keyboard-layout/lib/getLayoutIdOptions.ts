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
  const filteredProfiles = layoutProfiles.filter(
    (profile) => profile.system === system
  );
  const profilesWithLanguage = filteredProfiles.filter(
    (profile) => profile.language === language
  );

  const options = profilesWithLanguage.map((profile) => ({
    value: profile.id,
    label: profile.name,
  }));

  if (options.length > 0) {
    return options;
  } else {
    return null;
  }
}
