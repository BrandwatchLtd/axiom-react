import React, { PropTypes } from 'react';

const Doc = ({ location }) => {
  const docs = require('../docs/' + location.pathname + '/index.docs.js');

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
