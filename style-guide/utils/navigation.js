import humanize from 'humanize-string';
import { getFirstPath, getStructure } from './structure';

export function normalisePathname(pathname) {
  return `/${(pathname === '/' ? getFirstPath() : pathname)
    .replace(__BASENAME__, '/')
    .replace(/^\/|\/$/, '')}`;
}

export function buildNavigationItem(activePath, openPath, structure) {
  return {
    id: structure.id,
    name: humanize(structure.id),
    path: structure.path,
    to: structure.children ? null : structure.path,
    isOpen: openPath.includes(structure.path),
    isActive: structure.path === activePath,
    children: Array.isArray(structure.children)
      ? buildNavigationItems(activePath, openPath, structure.children)
      : null,
  };
}

export function buildNavigationItems(activePath, openPath, structure = getStructure(), items = []) {
  if (Array.isArray(structure)) {
    structure.forEach((structure) =>
      buildNavigationItems(activePath, openPath, structure, items)
    );
  } else if (structure.hasExamples || Array.isArray(structure.children)) {
    items.push(buildNavigationItem(activePath, openPath, structure));
  }

  return items;
}
