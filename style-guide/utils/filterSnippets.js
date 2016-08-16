import { createElement } from 'react';
import omit from 'lodash/omit';
import { isReactElement } from './react-elements';

/**
 * Filter for _snippetSkip_ and _snippetReplace_ properties
 * Filter the given `component` for properties like `snippetSkip` and
 * `snippetReplace` and remove/replace them according to the given `target`
 * @param {react} component
 * @param {string='render'} target
 * @return {react}
 */
export default function filterSnippets(component, target = 'render') {
  if (!component) {
    return undefined;
  }

  if (!isReactElement(component)) {
    return component;
  }

  if (component.props.snippetSkip && target === 'static') {
    return filterSnippets(component.props.children, target);
  }

  if (component.props.snippetReplace && target === 'render') {
    return component.props.children;
  }

  if (component.props.snippetReplace && target === 'static') {
    return '...';
  }

  // if (component.props.snippetSkip && target === 'render')
  return createElement(
    component.type,
    omit(component.props, ['snippetSkip', 'snippetReplace']),
    filterSnippets(component.props.children, target)
  );
}
