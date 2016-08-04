import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class Weak extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-text--weak');

    return (
      <span { ...this.props } className={ classes }>
        { children }
      </span>
    );
  }
}

export default enhance(Weak)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
