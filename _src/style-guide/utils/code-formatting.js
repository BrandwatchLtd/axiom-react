import { js as beautifyJs, html as beautifyHtml, css as beautifyCSS } from 'js-beautify';
import { SCSS, HTML, JSX, JS, MARKDOWN } from 'style-guide/constants/CodeLanguages';

// Encode all of the HTML characters so it can be displayed.
function encodeHTML(html) {
  return html
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatHtml(html) {
  return beautifyHtml(html, {
    indent_size: 2,
    preserve_newlines: true,
    unformatted: [],
  });
}

function formatCss(css) {
  return beautifyCSS(css);
}

function formatJs(js) {
  return beautifyJs(js, {
    indent_size: 2,
  });
}

function formatJsx(jsx) {
  return beautifyHtml(jsx, {
    indent_size: 2,
    preserve_newlines: true,
    unformatted: [],
  });
}

function transformSnippet(snippet, transforms) {
  return transforms.reduce((transformedContent, transform) => transform(transformedContent), snippet);
}

function prepareHTMLSnippet(snippet) {
  return transformSnippet(snippet, [ formatHtml, encodeHTML ]);
}

function prepareJSXSnippet(snippet) {
  return transformSnippet(snippet, [ formatJsx, encodeHTML ]);
}

function prepareSassSnippet(snippet) {
  return transformSnippet(snippet, [ formatCss ]);
}

function prepareJSSnippet(snippet) {
  return transformSnippet(snippet, [ formatJs]);
}

function prepateMarkdownSnippet(snippet) {
  const language = (/^```(\w*)/.exec(snippet) || [])[1] ;

  if (language && prepareMap[language]) {
    return prepareSnippet(snippet, language);
  }

  return snippet;
}

export const prepareMap = {
  [SCSS]: (prepareSassSnippet),
  [HTML]: prepareHTMLSnippet,
  [JSX]: prepareJSXSnippet,
  [JS]: prepareJSSnippet,
  [MARKDOWN]: prepateMarkdownSnippet,
};

export function prepareSnippet(snippet, language) {
  return prepareMap[language] ? prepareMap[language](snippet) : snippet;
}
