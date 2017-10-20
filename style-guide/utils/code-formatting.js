import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-scss';
import {
  js as beautifyJs,
  html as beautifyHtml,
  css as beautifyCSS,
} from 'js-beautify';

function formatHtml(html) {
  return beautifyHtml(html, {
    indent_size: 2,
    preserve_newlines: false,
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
  return transforms.reduce((transformedContent, transform) =>
    transform(transformedContent), snippet
  );
}

function prepareHTMLSnippet(snippet) {
  return transformSnippet(snippet, [ formatHtml ]);
}

function prepareJSXSnippet(snippet) {
  return transformSnippet(snippet, [ formatJsx ]);
}

function prepareSassSnippet(snippet) {
  return transformSnippet(snippet, [ formatCss ]);
}

function prepareJSSnippet(snippet) {
  return transformSnippet(snippet, [ formatJs]);
}

export const prepareMap = {
  html: prepareHTMLSnippet,
  js: prepareJSSnippet,
  javascript: prepareJSSnippet,
  json: (json) => json,
  jsx: prepareJSXSnippet,
  scss: prepareSassSnippet,
};

export const highlightMap = {
  html: Prism.languages.markup,
  js: Prism.languages.javascript,
  javascript: Prism.languages.javascript,
  json: Prism.languages.json,
  jsx: Prism.languages.jsx,
  scss: Prism.languages.scss,
};

export const classMap = {
  html: 'language-markup',
  js: 'language-javascript',
  javascript: 'language-javascript',
  json: 'language-json',
  jsx: 'language-jsx',
  scss: 'language-scss',
};

export function prepareSnippet(snippet, language) {
  if (!prepareMap[language]) {
    throw Error(`No prepare function available for language '${language}'`);
  }

  if (!highlightMap[language]) {
    throw Error(`No highlight available for language '${language}'`);
  }

  if (!classMap[language]) {
    throw Error(`No class available for language '${language}'`);
  }

  return {
    className: classMap[language],
    code: Prism.highlight(
      prepareMap[language](snippet),
      highlightMap[language],
    ),
  };
}
