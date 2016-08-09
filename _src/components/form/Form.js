import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./Form.scss');
}

export class Form extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { className, children, ...rest } = this.props;
    const classes = classnames(className, 'ax-form');

    return (
      <form { ...rest } className={ classes }>
        { children }
      </form>
    );
  }
}

export default enhance(Form)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
