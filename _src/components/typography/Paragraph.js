import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./Paragraph.scss');
}

export class Paragraph extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { className, children, ...rest } = this.props;
    const classes = classnames('ax-paragraph', className);

    return (
      <p { ...rest } className={ classes }>
        { children }
      </p>
    );
  }
}

export default enhance(Paragraph)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
