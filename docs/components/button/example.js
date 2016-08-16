import React, { PropTypes } from 'react';
import Button from './';

const Article = ({ children }) => (
  <div className="article">{ children }</div>
);

Article.propTypes = {
  children: PropTypes.node,
};

const Example = (
  <Article snippetSkip={ true }>
    <Button><div snippetReplace={ true }>Blabla</div></Button>
  </Article>
);

export default Example;
