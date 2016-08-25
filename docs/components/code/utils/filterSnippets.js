import { createElement } from 'react';
import omit from 'lodash/omit';
import { isReactElement } from './react-elements';

const PLACEHOLDER = '...';

/**
 * Filter for specific properties
 * Filter the given `component` for properties like `snippetSkip`,
 * `snippetReplace`, `snippetIgnore` and `renderSkip` and remove/replace them.
 *
 * snippetIgnore: Doesn't have any effect - the property is removed.
 * snippetReplace: Doesn't have any effect - the property is removed.
 * renderSkip: The element is going to be skipped.
 * snippetSkip: Doesn't have any effect - the property is removed.
 * @param {react|array} component
 * @param {int} key
 * @return {react}
 */
export const filterRender = (component, key) => {
  if (!component) {
    return undefined;
  }

  if (Array.isArray(component)) {
    return component.map((e, index) => filterRender(e, index)).filter(e => e);
  }

  if (!isReactElement(component)) {
    return component;
  }

  if (component.props.renderSkip) {
    return undefined;
  }

  return createElement(
    component.type,
    {
      ...omit(component.props, ['snippetIgnore', 'snippetReplace', 'snippetSkip']),
      key,
    },
    filterRender(component.props.children)
  );
};

/**
 * Filter for specific properties
 * Filter the given `component` for properties like `snippetSkip`,
 * `snippetReplace`, `snippetIgnore` and `renderSkip` and remove/replace.
 *
 * snippetIgnore: The children of this element are going to be shown.
 * snippetReplace: The element and all of its children are going to be replaced
 * with a placeholder.
 * renderSkip: Doesn't have any effect - the property is removed.
 * snippetSkip: The element is going to be skipped.
 * @param {react|array} component
 * @param {int} key
 * @return {react}
 */
export const filterSnippet = (component, key) => {
  if (!component) {
    return undefined;
  }

  if (Array.isArray(component)) {
    return component.map((e, index) => filterSnippet(e, index)).filter(e => e);
  }

  if (!isReactElement(component)) {
    return component;
  }

  if (component.props.snippetIgnore) {
    return filterSnippet(component.props.children);
  }

  if (component.props.snippetSkip) {
    return undefined;
  }

  if (component.props.snippetReplace) {
    return PLACEHOLDER;
  }

  return createElement(
    component.type,
    {
      ...omit(component.props, ['snippetIgnore', 'snippetReplace', 'renderSkip', 'snippetSkip']),
      key,
    },
    filterSnippet(component.props.children)
  );
};
