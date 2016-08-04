import React, { PropTypes } from 'react';

const Doc = ({ location }) => {
  console.log('../docs/' + location.pathname);
  const docs = require('../docs/' + location.pathname);
  const { Introduction, Example } = docs;

  return (
    <div>
      <h1>{ docs.title }</h1>
      <Introduction />
      { Example && <Example /> }
    </div>
  );
};

Doc.propTypes = {
  location: PropTypes.object,
};

export default Doc;
