import humanize from 'humanize-string';
import { markdownRouteToPath, getDocs } from 'style-guide/utils/markdown-document';

function buildNavigationItem({ children, hidden, id }, activePath, openPath, parentPaths = []) {
  const thisPath = [...parentPaths, id];
  const navigationItemChildren = Array.isArray(children)
    ? children.filter(({ hidden }) => !hidden).map((child) => buildNavigationItem(child, activePath, openPath, thisPath))
    : null;

  return {
    id,
    name: humanize(id),
    to: navigationItemChildren ? null : markdownRouteToPath(thisPath),
    path: thisPath,
    children: navigationItemChildren,
    isOpen: thisPath.join() === openPath.slice(0, thisPath.length).join(),
    isActive: thisPath.join() === activePath.slice(0, thisPath.length).join(),
  }
}

export function buildNavigationItems(activePath, openPath) {
  return getDocs().map((item) => {
    return buildNavigationItem(item, activePath, openPath)
  });
}
