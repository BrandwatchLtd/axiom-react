import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import omit from 'lodash/omit';
import Base from '../base/Base';
import { buildSelectableItems, defaultInputDisplayValue } from './_utils';
import Icon from '../icon/Icon';
import TextInput from '../form/TextInput';
import SelectList from '../select/SelectList';
import SelectMask from '../select/SelectMask';

if (__INCLUDE_CSS__) {
  require('./Select.scss');
}

const keyCodes = {
  ENTER: 13,
  ESC: 27,
  SPACE: 32,
  UP: 38,
  DOWN: 40,
};

const propIgnoreList = [
  'displayValue', 'hideSelected', 'identifier', 'items', 'multiselect', 'selection',
  'inputDisplayValue', 'onOpen', 'onClose', 'onSelect',
];

export default class Select extends Component {
  static propTypes = {
    displayValue: PropTypes.func,
    hideSelected: PropTypes.bool,
    identifier: PropTypes.func,
    inputDisplayValue: PropTypes.func,
    items: PropTypes.array.isRequired,
    maxHeight: PropTypes.number,
    multiselect: PropTypes.bool,
    noItemsText: PropTypes.string,
    selection: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    onSelect: PropTypes.func.isRequired,
  };

  static defaultProps = {
    displayValue: (item) => item,
    hideSelected: false,
    identifier: (item) => item,
    inputDisplayValue: defaultInputDisplayValue,
    maxHeight: 200,
    multiselect: false,
    noItemsText: 'No items to select',
    onOpen: () => {},
    onClose: () => {},
  };

  componentWillMount() {
    this.setState({
      activeIndex: -1,
      filterText: '',
      isOpen: false,
      scrollToActiveIndex: false,
    });
  }

  getInputDisplayValue() {
    const { filterText, isOpen } = this.state;
    const { inputDisplayValue, selection } = this.props;

    if (isOpen) {
      return filterText;
    }

    if (!selection || (Array.isArray(selection) && selection.length === 0)) {
      return '';
    }

    return inputDisplayValue(this.props, this.state) || '';
  }

  getSelection() {
    const { multiselect, selection } = this.props;
    return multiselect && !Array.isArray(selection)
      ? (selection ? [selection] : [])
      : selection;
  }

  hasSelection() {
    const { multiselect } = this.props;
    const selection = this.getSelection();
    return multiselect ? selection.length : !!selection;
  }

  close() {
    const { onClose } = this.props;
    this.setState({ isOpen: false });
    onClose();
  }

  open() {
    const { onOpen } = this.props;
    this.setState({ isOpen: true });
    onOpen();
  }

  toggle() {
    const { isOpen } = this.state;

    if (isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  handleItemClick(item) {
    const { multiselect, onSelect } = this.props;
    const { isSelected, value } = item;

    onSelect(isSelected ? this.deselect(value) : this.select(value), value);

    if (!multiselect) {
      this.close();
    }
  }

  deselect(value) {
    const { identifier, multiselect } = this.props;
    const selection = this.getSelection();

    return multiselect
      ? selection.filter((selectedItem) => identifier(selectedItem) !== identifier(value))
      : null;
  }

  select(value) {
    const { multiselect } = this.props;
    const selection = this.getSelection();

    return multiselect
      ? [ ...selection, value ]
      : value;
  }

  handleKeyDown(keyCode, items) {
    const { activeIndex, isOpen } = this.state;

    switch (keyCode) {
    case keyCodes.SPACE:
    case keyCodes.ENTER:
      if (isOpen) {
        this.handleItemClick(items[activeIndex]);
      } else {
        this.open();
      }
      break;
    case keyCodes.ESC:
      this.close();
      break;
    case keyCodes.UP:
      this.setActiveIndex(activeIndex - 1 < 0 ? (items.length - 1) : (activeIndex - 1));
      break;
    case keyCodes.DOWN:
      this.open();
      this.setActiveIndex(activeIndex + 1 >= items.length ? 0 : (activeIndex + 1));
      break;
    default:
      break;
    }
  }

  setActiveIndex(activeIndex, scrollToActiveIndex = true) {
    this.setState({
      activeIndex,
      scrollToActiveIndex,
    });
  }

  render() {
    const { isOpen, scrollToActiveIndex } = this.state;
    const { maxHeight, noItemsText, ...rest } = this.props;
    const items = buildSelectableItems(this.props, this.state);
    const classes = classnames('ax-select', {
      'ax-select--open': isOpen,
    });

    return (
      <Base
          className={ classes }
          onBlur={ ::this.close }
          onFocus={ ::this.open }
          onKeyDown={ ({ which }) => this.handleKeyDown(which, items) }
          tabIndex="-1">

        <TextInput
            { ...omit(rest, propIgnoreList) }
            className="ax-select__input"
            onChange={ (event) => this.setState({ filterText: event.target.value }) }
            value={ this.getInputDisplayValue() }>

          { do { if (!isOpen) {
            <Icon name="chevron-down" />
          } } }
        </TextInput>

        <SelectList
            isOpen={ isOpen }
            items={ items }
            maxHeight={ maxHeight }
            noItemsText={ noItemsText }
            onItemClick={ ::this.handleItemClick }
            onItemHover={ ::this.setActiveIndex }
            scrollToActiveIndex={ scrollToActiveIndex } />

        <SelectMask
            isOpen={ isOpen }
            onClick={ ::this.close } />
      </Base>
    );
  }
}
