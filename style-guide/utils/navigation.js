import humanize from 'humanize-string';
import { getStructure, routeToPath, getFirstPath } from 'style-guide/utils/examples';

function buildNavigationItem({ children, hidden, id }, activePath, openPath, firstPath, parentPaths = []) {
  const thisRoute = [...parentPaths, id];
  const navigationItemChildren = Array.isArray(children)
    ? children.filter(({ hidden }) => !hidden).map((child) => buildNavigationItem(child, activePath, openPath, firstPath, thisRoute))
    : null;

  const to = firstPath === '/' + thisRoute.join('/') ? '/' : routeToPath(thisRoute);

  return {
    id,
    name: humanize(id),
    to: navigationItemChildren ? null : to,
    route: thisRoute,
    children: navigationItemChildren,
    isOpen: thisRoute.join() === openPath.slice(0, thisRoute.length).join(),
    isActive: thisRoute.join() === activePath.slice(0, thisRoute.length).join(),
  };
}

export function buildNavigationItems(activePath, openPath) {
  const firstPath = getFirstPath();
  return getStructure().map((item) => {
    return buildNavigationItem(item, activePath, openPath, firstPath);
  });
}
