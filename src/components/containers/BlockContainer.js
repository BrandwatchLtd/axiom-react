import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./BlockContainer.scss');
}

export class BlockContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { className, children, ...rest } = this.props;
    const classes = classnames(className, 'ax-container--block');

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
