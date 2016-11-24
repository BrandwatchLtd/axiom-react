import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./LabelGroup.scss');
}

export default class LabelGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { className, children, ...rest } = this.props;
    const classes = classnames(className, 'ax-label__group');

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
