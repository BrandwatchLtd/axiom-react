import humanize from 'humanize-string';
import { getStructure, routeToPath, getFirstPath } from 'style-guide/utils/examples';

function buildNavigationItem({ children, hidden, id }, activePath, openPath, firstPath, parentPaths = []) {
  const thisPath = [...parentPaths, id];
  const navigationItemChildren = Array.isArray(children)
    ? children.filter(({ hidden }) => !hidden).map((child) => buildNavigationItem(child, activePath, openPath, firstPath, thisPath))
    : null;

  const to = firstPath === '/' + thisPath.join('/') ? '/' : routeToPath(thisPath);

  return {
    id,
    name: humanize(id),
    to: navigationItemChildren ? null : to,
    path: thisPath,
    children: navigationItemChildren,
    isOpen: thisPath.join() === openPath.slice(0, thisPath.length).join(),
    isActive: thisPath.join() === activePath.slice(0, thisPath.length).join(),
  };
}

export function buildNavigationItems(activePath, openPath) {
  const firstPath = getFirstPath();
  return getStructure().map((item) => {
    return buildNavigationItem(item, activePath, openPath, firstPath);
  });
}
