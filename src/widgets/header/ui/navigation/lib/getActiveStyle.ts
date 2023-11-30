import { theme } from '@/shared/styles';

import { isPathActive } from './isPathActive';

const primaryStyle = { color: theme.palette.text.primary };
const secondaryStyle = { color: theme.palette.text.secondary };

export function getActiveStyle(pathname: string, path: string) {
  return isPathActive(pathname, path) ? primaryStyle : secondaryStyle;
}
