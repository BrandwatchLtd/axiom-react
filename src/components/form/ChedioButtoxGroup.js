import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./ChedioButtoxGroup.scss');
}

export default class ChedioButtoxGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    inline: PropTypes.bool,
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
