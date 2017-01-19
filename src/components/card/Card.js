import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Card.scss');
}

export default class Card extends Component {
  static propTypes = {
    children: PropTypes.node,
    compact: PropTypes.bool,
  };

  render() {
    const { children, compact, ...rest } = this.props;
    const classes = classnames('ax-card', {
      'ax-card--compact': compact,
    });

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
