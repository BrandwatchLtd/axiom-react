import { cloneElement } from 'react';
import docStructure from 'style-guide/constants/DocStructure';
import * as routes  from 'style-guide/constants/Routing';
import { isReactElement, isReactElements } from 'style-guide/utils/react-elements';

export function getDocs() {
  return docStructure;
}

export function markdownRouteToPath(route) {
  return `/${routes.DOCS}/${route.join('/')}`;
}

export function pathToMarkdownRoute(path) {
  const matchRegex = new RegExp(`^\/?${routes.DOCS}\/([\\s\\S]*)`);
  const match = path.match(matchRegex);

  if (match) {
    return match[1].split('/');
  }

  return null;
}

export function getFirstDocumentRoute({ id, children } = getDocs()[0], paths = []) {
  if (Array.isArray(children)) {
    return getFirstDocumentRoute(children[0], [...paths, id]);
  }

  return [...paths, id];
}

export function getFirstDocumentPath() {
  return markdownRouteToPath(getFirstDocumentRoute());
}

function getMarkdownContent(route) {
  return route.reduce((level = [], nextLevelId) => {
    return (Array.isArray(level) ? level : level.children)
      .find(({ id }) => id === nextLevelId);
  }, getDocs());
}

export function getMarkdownContentFunction(route) {
  return (getMarkdownContent(route) || {}).children;
}

export function getMarkdownImports(route) {
  const { imports, importsLocation } = (getMarkdownContent(route) || {});

  if (imports && importsLocation) {
    return {
      components: imports,
      location: importsLocation,
    };
  }
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

  return cloneElement(element, {}, buildReactElement(element.props.children));
}
