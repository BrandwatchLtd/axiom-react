import React, { PropTypes } from 'react';

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

const Doc = ({ location }) => {
  const docs = require('../docs' + normalizePathname(location.pathname) + 'index.docs.js');

  const { Description, Example, title } = docs;

  return (
    <div>
      <h1>{ title }</h1>
      <Description />
      { Example && <Example /> }
    </div>
  );
};

Doc.propTypes = {
  location: PropTypes.object,
};

export default Doc;
