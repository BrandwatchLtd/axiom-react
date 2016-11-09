import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

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
      <Base { ...rest } Component="ul" className={ classes }>
        { children }
      </Base>
    );
  }
}

export default enhance(Menu)(addPropTypes());

