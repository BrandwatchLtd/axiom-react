import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

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
      <Base { ...rest } Component="p" className={ classes }>
        { children }
      </Base>
    );
  }
}

export default enhance(Paragraph)(addPropTypes());
