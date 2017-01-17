import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ChedioButtoxGroup.scss');
}

export default class ChedioButtoxGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    inline: PropTypes.bool,
  };

  render() {
    const { children, inline, ...rest } = this.props;
    const classes = classnames('ax-chedio-buttox__group', {
      'ax-chedio-buttox__group--inline': inline,
    });

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
