'use client';

import { usePathname } from 'next/navigation';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { NextLinkComposed } from '@/shared/components';

import { items } from '../config';
import { getActiveStyle } from '../lib/getActiveStyle';

export function Navigation() {
  const pathname = usePathname();

  return (
    <List component="nav" sx={{ display: 'flex', flexGrow: 1 }}>
      {items.map((item) => (
        <ListItem
          key={item.text}
          component={NextLinkComposed}
          href={item.href}
          sx={{ ...getActiveStyle(pathname, item.href) }}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
}
