import React, { Component, PropTypes } from 'react';
import { Base, Link } from 'bw-axiom';

export default class ContextMenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base Component="li" className="ax-context-menu__item">
        <Link { ...rest } className="ax-context-menu__item-link" supressStyle={ true }>
          { children }
        </Link>
      </Base>
    );
  }
}
