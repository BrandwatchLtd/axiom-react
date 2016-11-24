import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Form.scss');
}

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { className, children, ...rest } = this.props;
    const classes = classnames(className, 'ax-form');

    return (
      <Base { ...rest } Component="form" className={ classes }>
        { children }
      </Base>
    );
  }
}
