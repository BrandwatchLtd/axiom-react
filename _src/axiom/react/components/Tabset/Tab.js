import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class Tab extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-tabs__content');

    return (
      <div { ...this.props } className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(Tab)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
