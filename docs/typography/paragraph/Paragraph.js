import React, { PropTypes } from 'react';
import classnames from 'classnames';

if (__INCLUDE_CSS__) {
  require('./paragraph.scss');
}

const Paragraph = ({ children, color = 'darkgrey' }) => {
  const classes = classnames('ax-paragraph', `ax-paragraph--${color}`);

  return (
    <p className={ classes }>{ children }</p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default Paragraph;
