import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { localePrefix, locales } from '@/shared/config/next-intl/config';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});
