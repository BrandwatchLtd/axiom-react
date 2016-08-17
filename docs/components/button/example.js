import React, { PropTypes } from 'react';
import Button from './';

const Article = ({ children }) => (
  <div className="article">{ children }</div>
);

Article.propTypes = {
  children: PropTypes.node,
};

const Example = (
  <div>
    <div className="renderSkip" renderSkip></div>
    <div className="snippetSkipdiv" snippetSkip>
    </div>
    <Article snippetIgnore={ true }>
      <Button><div snippetReplace={ true }>Blabla</div></Button>
    </Article>
  </div>
);

export default Example;
