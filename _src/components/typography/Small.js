import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./Small.scss');
}

export class Small extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, className, ...rest } = this.props;
    const classes = classnames('ax-small', className);

    return (
      <small { ...rest } className={ classes }>
        { children }
      </small>
    );
  }
}

export default enhance(Small)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
