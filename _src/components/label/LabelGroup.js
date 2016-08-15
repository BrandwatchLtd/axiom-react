import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./LabelGroup.scss');
}

export class LabelGroup extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { className, children, ...rest } = this.props;
    const classes = classnames(className, 'ax-label__group');

    return (
      <div { ...rest } className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(LabelGroup)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
