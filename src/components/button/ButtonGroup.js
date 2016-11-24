import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./ButtonGroup.scss');
}

export default class ButtonGroup extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { className, children, ...rest } = this.props;
    const classes = classnames(className, 'ax-button__group');

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
