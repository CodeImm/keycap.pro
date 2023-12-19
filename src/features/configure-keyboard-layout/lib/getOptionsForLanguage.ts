import { LayoutId, LayoutLanguage, layoutProfiles } from '@/entities/keyboard';
import type { SelectOption } from '@/shared/components';

export function getOptionsForLanguage(
  language: LayoutLanguage
): SelectOption<LayoutId>[] {
  return layoutProfiles
    .filter((layout) => layout.language === language)
    .map((layout) => ({
      value: layout.id,
      label: layout.name,
    }));
}
