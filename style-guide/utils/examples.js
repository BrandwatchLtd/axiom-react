import docStructure from 'style-guide/constants/DocStructure';
import * as routes  from 'style-guide/constants/Routing';

export function getStructure() {
  return docStructure;
}

export function routeToPath(route) {
  return `/${routes.DOCS}/${route.join('/')}`;
}

export function pathToRoute(path) {
  const matchRegex = new RegExp(`^\/?${routes.DOCS}\/([\\s\\S]*)`);
  const match = path.match(matchRegex);

  if (match) {
    return match[1].split('/');
  }

  return null;
}

export function getFirstRoute({ id, children } = getStructure()[0], paths = []) {
  if (Array.isArray(children)) {
    return getFirstRoute(children[0], [...paths, id]);
  }

  return [...paths, id];
}

export function getFirstPath() {
  return routeToPath(getFirstRoute());
}

export function getPathData(path) {
  return getRouteData(pathToRoute(path));
}

export function getRouteData(route) {
  return route.reduce((level = [], nextLevelId) => {
    return (Array.isArray(level) ? level : level.children)
      .find(({ id }) => id === nextLevelId);
  }, getStructure());
}

export function hasPathGotData(path) {
  return Array.isArray(pathToRoute(path)) && !!getPathData(path);
}
