import { renderToStaticMarkup } from 'react-dom/server';
import reactElementToJsxString from 'react-element-to-jsx-string';

export default function renderSnippet(snippet, renderer) {
  return Array.isArray(snippet)
    ? snippet.reduce((acc, snippet) => `${acc}${renderSnippet(snippet, renderer)}\n`, '')
    : renderer(snippet);
}

/* eslint-disable no-console */
export function htmlRender(snippet) {
  try {
    const html = renderToStaticMarkup(snippet);
    return html.trim() && html !== '<noscript></noscript>' ? html : '';
  } catch (e) {
    console.error(e);
  }
}

export function jsxRender(snippet) {
  try {
    return reactElementToJsxString(snippet, {
      useBooleanShorthandSyntax: false,
      showDefaultProps: false,
      filterProps: ['key', 'space'],
    });
  } catch (e) {
    console.error(e);
  }
}
/* eslint-disable no-console */
