import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class ButtonGroup extends Component {
  static propTypes = {
    children: { node: true },
    joined: { bool: true },
  };

  render() {
    const { className, children, joined } = this.props;
    const classes = classnames(className, 'ax-button__group', {
      'ax-button__group--joined': joined,
    });

    return (
      <div { ...this.props } className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(ButtonGroup)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
