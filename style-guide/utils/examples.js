import docStructure from 'style-guide/constants/DocStructure';

export function getStructure() {
  return docStructure;
}

export function routeToPath(route) {
  return `/${route.join('/')}`;
}

export function pathToRoute(path) {
  // ToDo maybe the RegEx is not needed any more?
  const matchRegex = new RegExp('^\/?([\\s\\S]*)');
  const match = path.match(matchRegex);

  if (match) {
    return match[1].replace(/\/$/g, '').split('/');
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
