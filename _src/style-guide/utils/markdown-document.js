import uuid from 'uuid';
import { cloneElement } from 'react';
import docs from 'docs';
import * as routes  from 'style-guide/constants/Routing';
import { V_CURRENT } from 'style-guide/constants/Versions';
import { isReactElement, isReactElements } from 'style-guide/utils/react-elements';

export function markdownRouteToPath(route) {
  return `/${routes.DOCS}/${route.join('/')}`;
}

// Needed until React Router 3.0.0 with
// relative to Link component.
export function markdownRouteToVersionedPath(route, pathanme) {
  return markdownRouteToPath([
    getVersion(pathToMarkdownRoute(pathanme)).id,
    ...route]
  );
}

export function pathToMarkdownRoute(path) {
  const matchRegex = new RegExp(`^\/?${routes.DOCS}\/([\\s\\S]*)`);
  const match = path.match(matchRegex);

  if (match) {
    return match[1].split('/');
  }

  return null;
}

export function getVersion(route) {
  return docs.find(({ id }) => id === (Array.isArray(route) ? route[0] : route));
}

export function getFirstDocumentRoute(version = V_CURRENT, { id, children } = getVersion(version), paths = []) {
  if (Array.isArray(children)) {
    return getFirstDocumentRoute(version, children[0], [...paths, id]);
  }

  return [...paths, id];
}

export function getFirstDocumentPath(version = V_CURRENT) {
  return markdownRouteToPath(getFirstDocumentRoute(version));
}

export function getMarkdownContentFunction(route) {
  return route.reduce((level, nextLevelId) => {
    if (Array.isArray(level)) {
      const nextLevel = level.find(({ id }) => id === nextLevelId);

      if (nextLevel) {
        return nextLevel.children;
      }
    }

    return null;
  }, docs);
}

export function hasMarkdownContent(path, route =  pathToMarkdownRoute(path)) {
  return Array.isArray(route) && typeof getMarkdownContentFunction(route) === 'function';
}

export function buildMarkdownContent(contentFn, routeParams, queryParams) {
  return contentFn(routeParams, queryParams).map((element) => {
    return isReactElements(element)
      ? buildReactElement(element)
      : element;
  });
}

function buildReactElement(element) {
  if (Array.isArray(element)) {
    return element.map((e) => buildReactElement(e)).filter((e) => e);
  }

  if (!isReactElement(element)) {
    if (typeof element === 'string') {
      return element.trim() ? element : null;
    }

    return element;
  }


  return cloneElement(element, { key: uuid.v4() }, buildReactElement(element.props.children));
}
