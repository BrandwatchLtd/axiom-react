import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Control from './Control';
import Menu from './Menu';
import Item from './Item';
import Selection from './Selection';
import Mask from './Mask';
import { getMenuStyle, getVisibleItems, mapValuesToItems, mapItemsToValues } from './helpers';
import * as keyCodes from './keyCodes';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

const DOWN = 'DOWN';
const UP = 'UP';

const propTypes = {
  itemRenderer: {
    func: true,
  },
  items: {
    array: true,
  },
  multiple: {
    bool: true,
  },
  open: {
    bool: true,
  },
  placeholder: {
    string: true,
  },
  selection: {
    any: true,
  },
  onChange: {
    func: true,
  },
};

class Pickadilly extends Component {
  static propTypes = propTypes;

  constructor(props) {
    const defaults = {
      className: '',
      disabled: false,
      invalid: false,
      items: [],
      itemRenderer: function itemRenderer(props) {
        return <Item { ...props } />;
      },
      multiple: false,
      open: false,
      placeholder: 'Please select...',
      onChange: () => {},
      focused: false,
    };

    super(props);

    this.state = {
      ...defaults,
      ...props,
      selection: mapValuesToItems([].concat(props.selection || []), props.items),
      visibleItems: props.items || [],
    };

    this.onWindowResize = () => {
      this.repositionMenu();
    };
  }

  componentWillReceiveProps(nextProps) {
    const newState = {
      disabled: nextProps.disabled,
      invalid: nextProps.invalid,
      placeholder: nextProps.placeholder,
      items: nextProps.items,
      selection: [],
      visibleItems: nextProps.items,
    };

    if (nextProps.items && nextProps.selection) {
      newState.selection = mapValuesToItems([].concat(nextProps.selection || []), nextProps.items);
      newState.visibleItems = getVisibleItems(nextProps.items, newState.selection, this.state.filter);
    }

    this.setState(newState);
  }

  signalChange(selection = []) {
    const { multiple, onChange } = this.state;
    const values = mapItemsToValues(selection);

    onChange(multiple ? values : values[0]);
  }

  openMenu() {
    const selectEl = ReactDOM.findDOMNode(this.refs.select);
    const newFilter = '';
    const { items, selection } = this.state;

    window.addEventListener('resize', this.onWindowResize);

    this.setState({
      activeItem: null,
      menuStyle: getMenuStyle(selectEl),
      open: true,
      filter: newFilter,
      focused: false,
      visibleItems: getVisibleItems(items, selection, newFilter),
    });
  }

  closeMenu() {
    window.removeEventListener('resize', this.onWindowResize);

    this.setState({
      focused: true,
      open: false,
    });
  }

  toggleMenu() {
    if (this.state.open) {
      this.closeMenu();
      return;
    }

    this.openMenu();
  }

  onBlur() {
    if (this.state.open) {
      return;
    }

    this.setState({ focused: false });
  }

  repositionMenu(flipped = false) {
    const selectEl = ReactDOM.findDOMNode(this.refs.select);

    this.setState({
      menuStyle: getMenuStyle(selectEl, flipped),
    });
  }

  selectItem(item) {
    if (!item) {
      return;
    }

    const { items, selection, filter, multiple } = this.state;
    const newSelection = multiple ? selection.concat(item) : [item];

    this.setState({
      selection: newSelection,
      visibleItems: getVisibleItems(items, newSelection, filter),
    });

    this.closeMenu();
    this.signalChange(newSelection);
  }

  unselectItem(item) {
    if (!this.state.multiple) {
      this.setState({
        selection: [],
      });

      this.signalChange([]);
      return;
    }

    const { items, selection, filter } = this.state;
    const itemIndex = selection.indexOf(item);
    const newSelection = selection.slice(0, itemIndex).concat(selection.slice(itemIndex + 1));

    this.setState({
      selection: newSelection,
      visibleItems: getVisibleItems(items, newSelection, filter),
    });

    this.signalChange(newSelection);
  }

  filterItems(filter) {
    const { items, selection } = this.state;

    this.setState({
      filter: filter,
      activeItem: null,
      visibleItems: getVisibleItems(items, selection, filter),
    });
  }

  setActiveItem(item) {
    this.setState({
      activeItem: item,
    });
  }

  moveCursor(direction) {
    const { visibleItems, activeItem } = this.state;
    const activeItemIndex = visibleItems.indexOf(activeItem);
    let newActiveItemIndex;

    if (direction === UP) {
      newActiveItemIndex = (activeItemIndex - 1) < 0 ? (visibleItems.length - 1) : (activeItemIndex - 1);
    }
    if (direction === DOWN) {
      newActiveItemIndex = (activeItemIndex + 1) < visibleItems.length ? (activeItemIndex + 1) : 0;
    }

    this.setActiveItem(visibleItems[newActiveItemIndex]);
  }

  handleKeyPress(e) {
    switch (e.which) {
    case keyCodes.TAB:
      e.preventDefault();
      if (e.shiftKey) {
        return this.moveCursor(UP);
      }
      return this.moveCursor(DOWN);
    case keyCodes.ENTER:
      return this.selectItem(this.state.activeItem);
    case keyCodes.ESC:
      e.stopPropagation();
      return this.closeMenu();
    case keyCodes.UP:
      return this.moveCursor(UP);
    case keyCodes.DOWN:
      return this.moveCursor(DOWN);
    default:
      return;
    }
  }

  render() {
    const {
      activeItem,
      disabled,
      invalid,
      itemRenderer,
      menuStyle,
      multiple,
      open,
      placeholder,
      selection,
      visibleItems,
      className,
      focused,
     } = this.state;

    const placeholderText = (!multiple && selection.length) ? selection[0].label : placeholder;

    return (
      <div className={ classnames('pickadilly', className) } ref="select">
        <Selection
            onUnselectItem={ this.unselectItem.bind(this) }
            selection={ multiple ? selection : [] } />
        <Control
            disabled={ disabled }
            focused={ focused }
            invalid={ invalid }
            onBlur={ this.onBlur.bind(this) }
            onToggleMenu={ this.toggleMenu.bind(this) }
            open={ open }
            placeholder={ placeholderText } />
        <Menu
            activeItem={ activeItem }
            flipMenu={ this.repositionMenu.bind(this, true) }
            itemRenderer={ itemRenderer }
            menuStyle={ menuStyle }
            onFilterItems={ this.filterItems.bind(this) }
            onHoverItem={ this.setActiveItem.bind(this) }
            onItemSelected={ this.selectItem.bind(this) }
            onKeyDown={ this.handleKeyPress.bind(this) }
            open={ open }
            visibleItems={ visibleItems } />
        <Mask
            onClick={ this.toggleMenu.bind(this) }
            open={ open } />
      </div>
    );
  }
}

export default enhance(Pickadilly)(
  addPropTypes('global'),
  addClassName('global'),
);
