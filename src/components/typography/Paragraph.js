import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Paragraph.scss');
}

export default class Paragraph extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { className, children, ...rest } = this.props;
    const classes = classnames('ax-paragraph', className);

    return (
      <Base { ...rest } Component="p" className={ classes }>
        { children }
      </Base>
    );
  }
}
