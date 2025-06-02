import { paths } from '@/shared/routing';

// TODO: подумать как не типизировать, а использовать messages
type Item = { text: ItemText; href: string };

type ItemText = 'home' | 'exercises' | 'statistics' | 'testing' | 'admin';

export const items: Item[] = [
  { text: 'home', href: paths.home },
  { text: 'exercises', href: paths.exercises },
  { text: 'statistics', href: paths.statistics },
  { text: 'testing', href: paths.testing }
];
