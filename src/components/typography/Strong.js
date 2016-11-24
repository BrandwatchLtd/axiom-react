import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Strong.scss');
}

export default class Strong extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, className, ...rest } = this.props;
    const classes = classnames(className, 'ax-text--strong');

    return (
      <Base { ...rest } Component="strong" className={ classes }>
        { children }
      </Base>
    );
  }
}
