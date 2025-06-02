import { LayoutLanguage, System, layoutProfiles } from '@/entities/keyboard';
import { KeyboardLayoutId } from '@/shared/types';

export function getDefaultLayoutConfig(system: System): [System, LayoutLanguage, KeyboardLayoutId] {
  const filteredProfiles = layoutProfiles.filter((profile) => profile.system === system);

  const defaultProfile = filteredProfiles.find((profile) => profile.language);
  const defaultProfiles = filteredProfiles.filter((profile) => profile.language === defaultProfile!.language);

  return [system, defaultProfile!.language, defaultProfiles[0].id];
}
