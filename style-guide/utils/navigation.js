import humanize from 'humanize-string';
import { getStructure } from 'style-guide/utils/structure';

export function buildNavigationItems(activePath, openPath, structure = getStructure(), items = []) {
  if (Array.isArray(structure)) {
    structure.forEach((structure) =>
      buildNavigationItems(activePath, openPath, structure, items)
    );
  } else if (structure.hasExamples || Array.isArray(structure.children)) {
    items.push({
      id: structure.id,
      name: humanize(structure.id),
      to: structure.children ? null : structure.path,
      path: structure.path,
      isOpen: openPath.includes(structure.path),
      isActive: structure.path === activePath,
      children: Array.isArray(structure.children)
        ? buildNavigationItems(activePath, openPath, structure.children)
        : null,
    });
  }

  return items;
}
