import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./ChedioButtoxGroup.scss');
}

export class ChedioButtoxGroup extends Component {
  static propTypes = {
    children: { node: true },
    inline: { bool: true },
  };

  render() {
    const { className, children, inline, ...rest } = this.props;
    const classes = classnames(className, 'ax-chedio-buttox__group', {
      'ax-chedio-buttox__group--inline': inline,
    });

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}

export default enhance(ChedioButtoxGroup)(addPropTypes());
