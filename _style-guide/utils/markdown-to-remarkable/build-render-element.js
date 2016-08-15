import { createElement } from 'react';
import omit from 'lodash/omit';
import { isReactElement } from 'style-guide/utils/react-elements';

export default function buildRenderElement(element) {
  if (!element) return undefined;
  if (Array.isArray(element)) return element.map((e) => buildRenderElement(e)).filter((e) => e);
  if (!isReactElement(element)) return element;
  if (element.props.renderSkip) return undefined;

  return createElement(
    element.type,
    omit(element.props, ['renderSkip', 'snippetReplace', 'snippetSkip', 'snippetIgnore']),
    buildRenderElement(element.props.children),
  );
}
