import React, { PropTypes } from 'react';

const normalizePathname = (path) => {
  let pathname = path;
  if (!pathname.endsWith('/')) {
    pathname = pathname + '/';
  }

  if (pathname === '/') {
    pathname = '';
  }

  if (pathname.startsWith('/')) {
    pathname = pathname.replace(/^\/(.*)/g, '$1');
  }

  return pathname;
};

const Doc = ({ location }) => {
  const docs = require('../docs/' + normalizePathname(location.pathname) + 'index.docs.js');

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
