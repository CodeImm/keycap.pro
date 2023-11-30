export function isPathActive(pathname: string, path: string) {
  const pathSegment = `/${pathname.split('/')[1]}`;
  return pathname === path || pathSegment === path;
}
