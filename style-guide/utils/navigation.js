import { Children } from 'react';
import routes from '../routes';

const basenameRegex = new RegExp(`${__BASENAME__}/`);

export function normalisePath(path) {
  return `/${path
    .replace(basenameRegex, '')
    .replace(/(^\/*|\/*$)/g, '')}`;
}

export function trailToPath(trail) {
  return normalisePath(trail.join('/'));
}

export function pathToTrail(path) {
  return normalisePath(path).match(/([a-z-]+)/g);
}

export function findRoute(path) {
  return flattenRoute(routes)[normalisePath(path)];
}

export function findChildRoutes(path) {
  return findRoute(path).props.children.filter((c) => c);
}

export function flattenRoute(route, flat = {}, trail = []) {
  trail = [...trail, route.props.path];
  flat[trailToPath(trail)] = route;

  if (route.props.children) {
    Children.toArray(route.props.children).forEach((route) => {
      flattenRoute(route, flat, trail);
    });
  }

  return flat;
}
