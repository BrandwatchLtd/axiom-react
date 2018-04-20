import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import CheckBox from '../Form/CheckBox';
import Icon from '../Icon/Icon';

export const contextMenuItemSelector = 'data-ax-context-menu-item';

export default class ContextMenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    multiSelect: PropTypes.bool,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
  };

  render() {
    const {
      children,
      disabled,
      icon,
      onClick,
      multiSelect,
      selected,
      ...rest
    } = this.props;

    const classes = classnames('ax-context-menu__item', {
      'ax-context-menu__item--selected': selected,
    });

    return (
      <Base { ...rest } { ...{ [contextMenuItemSelector]: true } }
          Component="button"
          className={ classes }
          disabled={ disabled }
          onClick={ onClick }
          textStrong={ selected }>
        { multiSelect && (
          <div className="ax-context-menu__item-checkbox">
            <CheckBox checked={ selected } disabled={ disabled } onChange={ onClick } />
          </div>
        ) }

        <div className="ax-context-menu__item-content">
          { children }
        </div>

        { !multiSelect && selected !== undefined && (
          <div className="ax-context-menu__item-icon">
            <Icon cloak={ !selected } name="tick" />
          </div>
        ) }

        { icon !== undefined && (
          <div className="ax-context-menu__item-icon">
            <Icon name={ icon } />
          </div>
        ) }
      </Base>
    );
  }
}
