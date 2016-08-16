import React, { PropTypes } from 'react';
import jsxToString from 'jsx-to-string';
import { renderToStaticMarkup } from 'react-dom/server';
import Code from '../docs/components/code';
import html from 'html';
import filterSnippets from './utils/filterSnippets';

/**
 * Normalize the pathname
 * Depending on the server or client side rendering the path provided by
 * location.pathname is slightly different. In order to achieve one common path
 * format a backslash is prepended or appended.
 * @param {string} path
 * @return {string}
 */
const normalizePathname = (path) => {
  return ''.concat(!path.startsWith('/') ? '/' : '', path, !path.endsWith('/') ? '/' : '');
};

/**
 * Render the provided example
 * Renders the example component and also converts it to JSX and a plain HTML
 * version to provide a better example
 */
const renderExample = example => {
  if (!example) {
    return null;
  }

  return (
    <div>
      Rendered: <br />
      { filterSnippets(example) }
      JSX: <br />
      { jsxToString(filterSnippets(example, 'static')) }
      HTML: <br />
      <Code>
        { html.prettyPrint(renderToStaticMarkup(filterSnippets(example, 'static'))) }
      </Code>
    </div>
  );
};

const Doc = ({ location }) => {
  const docs = require('../docs' + normalizePathname(location.pathname) + 'index.docs.js');

  const { Description, example, title } = docs;

  return (
    <div>
      <h1>{ title }</h1>
      <Description />
      { renderExample(example) }
    </div>
  );
};

Doc.propTypes = {
  location: PropTypes.object,
};

export default Doc;
