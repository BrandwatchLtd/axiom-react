import humanize from 'humanize-string';
import { getStructure, routeToPath } from 'style-guide/utils/examples';

function buildNavigationItem({ children, hidden, id }, activePath, openPath, parentPaths = []) {
  const thisPath = [...parentPaths, id];
  const navigationItemChildren = Array.isArray(children)
    ? children.filter(({ hidden }) => !hidden).map((child) => buildNavigationItem(child, activePath, openPath, thisPath))
    : null;

  return {
    id,
    name: humanize(id),
    to: navigationItemChildren ? null : routeToPath(thisPath),
    path: thisPath,
    children: navigationItemChildren,
    isOpen: thisPath.join() === openPath.slice(0, thisPath.length).join(),
    isActive: thisPath.join() === activePath.slice(0, thisPath.length).join(),
  };
}

export function buildNavigationItems(activePath, openPath) {
  return getStructure().map((item) => {
    return buildNavigationItem(item, activePath, openPath);
  });
}
