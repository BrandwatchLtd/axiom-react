import React, { Component, PropTypes } from 'react';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Card.scss');
}

export default class Card extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <Base className="ax-card">
        { children }
      </Base>
    );
  }
}
