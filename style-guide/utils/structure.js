export function getStructure() {
  return __STRUCTURE__;
}

export function routeToPath(route) {
  return `/${route.join('/')}`;
}

export function pathToRoute(path) {
  return path.match(/([a-z-]+)/g);
}

export function getRouteData(route) {
  return route.reduce((level = [], nextLevelId) => {
    return (Array.isArray(level) ? level : level.children)
      .find(({ id }) => id === nextLevelId);
  }, getStructure());
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
