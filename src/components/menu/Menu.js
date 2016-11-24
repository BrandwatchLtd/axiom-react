import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Menu.scss');
}

export default class Menu extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { className, children, ...rest } = this.props;
    const classes = classnames('ax-menu', className);

    return (
      <Base { ...rest } Component="ul" className={ classes }>
        { children }
      </Base>
    );
  }
}
