import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class LabelGroup extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-label__group');

    return (
      <div { ...this.props } className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(LabelGroup)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
