import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../../_utils/component';

if (__INCLUDE_CSS__) {
  require('./paragraph.scss');
}

const Paragraph = ({ children, color = 'primary' }) => {
  const classes = classnames('ax-paragraph', `ax-paragraph--${color}`);

  return (
    <p className={ classes }>{ children }</p>
  );
};

Paragraph.propTypes = {
  children: {
    node: true,
  },
  color: {
    string: true,
  },
};

export default enhance(Paragraph)(
  addPropTypes()
);
