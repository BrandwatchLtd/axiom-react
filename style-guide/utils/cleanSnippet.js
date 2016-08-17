import jsxToString from 'jsx-to-string';
import { renderToStaticMarkup } from 'react-dom/server';
import { filterSnippet } from './filterSnippets';

const prepareHTMLSnippet = snippet => renderToStaticMarkup(filterSnippet(snippet));

const prepareJSXSnippet = snippet => jsxToString(filterSnippet(snippet));

const prepareMap = {
  html: prepareHTMLSnippet,
  jsx: prepareJSXSnippet,
};

export default function cleanSnippet(snippet, language) {
  if (!prepareMap[language]) throw Error(`No prepare function available for language '${language}'`);
  return prepareMap[language](snippet);
}
