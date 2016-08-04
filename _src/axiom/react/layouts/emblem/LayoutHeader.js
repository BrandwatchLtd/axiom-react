import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class LayoutHeader extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
  };

  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-layout--emblem__header');

    return (
      <header className={ classes }>
        { children }
      </header>
    );
  }
}

export default enhance(LayoutHeader)(
  addPropTypes('global'),
  addClassName('global'),
);
