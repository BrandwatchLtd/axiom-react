import { createElement, Children } from 'react';
import omit from 'lodash.omit';
import uniq from 'lodash.uniq';
import { isReactElement, isReactElements } from './react-elements';

const PLACEHOLDER = '...';

export function filterRender(component) {
  if (!component) {
    return undefined;
  }

  if (Array.isArray(component)) {
    return Children
      .map(component, filterRender)
      .filter((component) => component);
  }

  if (!isReactElement(component)) {
    return component;
  }

  return createElement(
    component.type,
    omit(component.props, ['snippetIgnore', 'snippetReplace', 'snippetSkip']),
    filterRender(component.props.children));
}

export function filterSnippet(component, topLevel = true) {
  if (!component) {
    return undefined;
  }

  if (Array.isArray(component)) {
    return uniq(Children
      .map(component, (component) => filterSnippet(component, topLevel))
      .filter((component) => topLevel ? isReactElements(component) : component));
  }

  if (!isReactElement(component)) {
    return PLACEHOLDER;
  }

  if (component.props.snippetReplace) {
    return PLACEHOLDER;
  }

  if (component.props.snippetSkip) {
    return undefined;
  }

  if (component.props.snippetIgnore) {
    return filterSnippet(component.props.children, topLevel);
  }

  return createElement(
    component.type,
    omit(component.props, ['snippetIgnore', 'snippetReplace', 'snippetSkip']),
    filterSnippet(component.props.children, false));
}
