import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContextMenuItem from '../Context/ContextMenuItem';

export default class DropdownMenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    /** SKIP */
    disabled: PropTypes.bool,
    /** SKIP */
    index: PropTypes.string.isRequired,
     /**
     * Whether the menu is part of a multi-selection menu. When true, this
     * will disable automatically closing the DropdownMenu when clicked.
     */
    multiSelect: PropTypes.bool,
    /** Click handler  */
    onClick: PropTypes.func,
    /** SKIP */
    onMouseOver: PropTypes.func,
  };

  static defaultProps = {
    index: '0',
  }

  static contextTypes = {
    closeDropdown: PropTypes.func.isRequired,
    addMenuItem: PropTypes.func.isRequired,
    moveMenuItem: PropTypes.func.isRequired,
    removeMenuItem: PropTypes.func.isRequired,
    focusedIndex: PropTypes.any,
    setFocusedIndex: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  componentWillMount() {
    const { disabled, index } = this.props;
    const { addMenuItem } = this.context;
    document.addEventListener('keydown', this.handleKeyDown, true);
    !disabled && addMenuItem(index);
  }

  componentWillUnmount() {
    const { index } = this.props;
    const { removeMenuItem } = this.context;
    document.removeEventListener('keydown', this.handleKeyDown, true);
    removeMenuItem(index);
  }

  componentWillReceiveProps(nextProps) {
    const {
      moveMenuItem,
      addMenuItem,
      removeMenuItem,
    } = this.context;

    const { disabled, index } = this.props;

    if (!disabled && !nextProps.disabled) {
      return moveMenuItem(index, nextProps.index);
    }

    if (disabled && !nextProps.disabled) {
      return addMenuItem(nextProps.index);
    }

    if (!disabled && nextProps.disabled) {
      return removeMenuItem(nextProps.index);
    }
  }

  handleClick(event) {
    const { closeDropdown } = this.context;
    const { multiSelect, onClick } = this.props;

    if (closeDropdown && !multiSelect) closeDropdown();

    if (onClick) onClick(event);
  }

  handleKeyDown(event) {
    const { key } = event;
    const { index } = this.props;
    const { focusedIndex } = this.context;

    if (index === focusedIndex && key === 'Enter') {
      event.preventDefault();
      this.handleClick(event);
    }
  }

  handleMouseOver(event) {
    const { onMouseOver, index } = this.props;
    const { setFocusedIndex } = this.context;

    setFocusedIndex(index);
    if (onMouseOver) onMouseOver(event);
  }

  render() {
    const { children, index, ...rest } = this.props;

    return (
      <ContextMenuItem
          { ...rest }
          focused={ this.context.focusedIndex === index }
          onClick={ this.handleClick }
          onMouseOver={ this.handleMouseOver }>
        { children }
      </ContextMenuItem>
    );
  }
}
