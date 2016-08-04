import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class LayoutContent extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
  };

  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-layout--emblem__content');

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(LayoutContent)(
  addPropTypes('global'),
  addClassName('global'),
);
