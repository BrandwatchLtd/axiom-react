import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class LayoutMain extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
  };

  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-layout--emblem__main');

    return (
      <main className={ classes }>
        { children }
      </main>
    );
  }
}

export default enhance(LayoutMain)(
  addPropTypes('global'),
  addClassName('global'),
);
