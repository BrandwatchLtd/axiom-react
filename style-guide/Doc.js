import React, { PropTypes } from 'react';
import Code from '../docs/components/code';
import { filterRender } from './utils/filterSnippets';

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
const renderExample = examples => {
  if (!examples) {
    return null;
  }

  return (
    <div>
      {
        examples.map(({ name, example }, index) => (
          <div key={ index }>
            <h2>{ name }</h2><br />
            { filterRender(example) }
            JSX: <br />
            <Code language="jsx">
              { example }
            </Code>
            <br />HTML: <br />
            <Code language="html">
              { example }
            </Code>
          </div>
        ))
      }
    </div>
  );
};

const Doc = ({ location }) => {
  const docs = require('../docs' + normalizePathname(location.pathname) + 'index.docs.js');

  const { Description, examples, title } = docs;

  return (
    <div>
      <h1>{ title }</h1>
      <Description />
      { renderExample(examples) }
    </div>
  );
};

Doc.propTypes = {
  location: PropTypes.object,
};

export default Doc;
