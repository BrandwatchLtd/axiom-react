import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class BlockContainer extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-container--block');

    return (
      <div { ...this.props } className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(BlockContainer)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
