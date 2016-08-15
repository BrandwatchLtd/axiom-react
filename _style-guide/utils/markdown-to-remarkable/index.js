import { isReactElements } from 'style-guide/utils/react-elements';
import { buildMarkdownContent } from 'style-guide/utils/markdown-document';
import buildRenderElement from './build-render-element';
import buildSnippet from './build-snippet';
import renderMarkdown from './render-markdown';
import restructure from './restructure';

export function render(content, routeParams, queryParams) {
  return restructure(
    buildMarkdownContent(content, routeParams, queryParams)
      .reduce((o, e) => [...o, ...isReactElements(e) ? [buildRenderElement(e), ...buildSnippet(e)] : [e]], [])
      .reduce(renderMarkdown(), [])
  );
}
