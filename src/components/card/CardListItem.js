import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';

export default class CardListItem extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="li" className="ax-card-list__item">
        { children }
      </Base>
    );
  }
}
