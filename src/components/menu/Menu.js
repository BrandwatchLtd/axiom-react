import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./Menu.scss');
}

export class Menu extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { className, children, ...rest } = this.props;
    const classes = classnames('ax-menu', className);

    return (
      <ul { ...rest } className={ classes }>
        { children }
      </ul>
    );
  }
}

export default enhance(Menu)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);

