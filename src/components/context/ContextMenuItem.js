import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base, Icon } from 'bw-axiom';
import './ContextMenuItem.css';

export default class ContextMenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
  };

  render() {
    const { children, disabled, selected, ...rest } = this.props;
    const classes = classnames('ax-context-menu__list-item', {
      'ax-context-menu__list-item--selected': selected,
    });

    return (
      <Base
          Component="li"
          className={ classes }
          textStrong={ selected }>
        <button { ...rest } className="ax-context-menu__item" disabled={ disabled }>
          <div className="ax-context-menu__item-content">
            { children }
          </div>

          { selected !== undefined && (
            <div className="ax-context-menu__item-icon">
              <Icon name="tick" />
            </div>
          ) }
        </button>
      </Base>
    );
  }
}
