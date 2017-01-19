import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./CardList.scss');
}

export default class CardList extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="ul" className="ax-card-list">
        { children }
      </Base>
    );
  }
}
