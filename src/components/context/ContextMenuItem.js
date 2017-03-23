import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';
import './ContextMenuItem.css';

export default class ContextMenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base Component="li" className="ax-context-menu__list-item">
        <button { ...rest } className="ax-context-menu__item">
          { children }
        </button>
      </Base>
    );
  }
}
