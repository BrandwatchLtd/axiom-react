import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Weak.scss');
}

export default class Weak extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { className, children, ...rest } = this.props;
    const classes = classnames(className, 'ax-text--weak');

    return (
      <Base { ...rest } Component="span" className={ classes }>
        { children }
      </Base>
    );
  }
}
