import { createElement } from 'react';
import { v4 } from 'uuid';
import omit from 'lodash/omit';
import uniq from 'lodash/uniq';
import { isReactElement, isReactElements } from './react-elements';

const PLACEHOLDER = '...';

export function filterRender(component) {
  if (!component) {
    return undefined;
  }

  if (Array.isArray(component)) {
    return component
      .map((component) => filterRender(component))
      .filter((component) => component);
  }

  if (!isReactElement(component)) {
    return component;
  }

  if (component.props.renderSkip) {
    return undefined;
  }

  const type = component.type;
  const children = filterRender(component.props.children);
  const props = {
    key: v4(),
    ...omit(component.props, ['snippetIgnore', 'snippetReplace', 'snippetSkip']),
  };

  return createElement(type, props, children);
}

export function filterSnippet(component, topLevel = true) {
  if (!component) {
    return undefined;
  }

  if (Array.isArray(component)) {
    return uniq(component
      .map((component) => filterSnippet(component, topLevel))
      .filter((component) => topLevel ? isReactElements(component) : component)
    );
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

  const type = component.type;
  const children = filterSnippet(component.props.children, false);
  const props = {
    key: v4(),
    ...omit(component.props, ['snippetIgnore', 'snippetReplace', 'renderSkip', 'snippetSkip']),
  };

  return createElement(type, props, children);
}
