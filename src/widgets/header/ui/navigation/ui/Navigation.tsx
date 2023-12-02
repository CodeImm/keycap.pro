'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { Link } from '@/shared/navigation';

import { items } from '../config';
import { getActiveStyle } from '../lib/getActiveStyle';

export function Navigation() {
  const t = useTranslations('Navigation');

  const pathname = usePathname();

  // TODO: убрать getActiveStyle, вынести ListItem в отдельный компонент, использовать useSelectedLayoutSegment
  return (
    <List component="nav" sx={{ display: 'flex', flexGrow: 1 }}>
      {items.map(({ href, text }) => (
        <ListItem
          key={text}
          component={Link}
          href={href}
          sx={{ ...getActiveStyle(pathname, href) }}
        >
          <ListItemText primary={t(`${text}`)} />
        </ListItem>
      ))}
    </List>
  );
}
