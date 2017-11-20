import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '../icon/Icon';

export default class ContextMenuItemSingle extends Component {
  static propTypes = {
    children: PropTypes.node,
    selected: PropTypes.bool,
  };

  render() {
    const { children, selected, ...rest } = this.props;
    const classes = classnames('ax-context-menu__item-single', {
      'ax-context-menu__item-single--selected': selected,
    });

    return (
      <button { ...rest } className={ classes }>
        <div className="ax-context-menu__item-content">
          { children }
        </div>

        { selected !== undefined && (
          <div className="ax-context-menu__item-icon">
            <Icon cloak={ !selected } name="tick" />
          </div>
        ) }
      </button>
    );
  }
}
