import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';
import omit from 'lodash.omit';

export const DropdownSourceRef = 'DropdownSource';

export default class DropdownSource extends Component {
  static propTypes = {
    children: PropTypes.node,
    /**
     * Adds focus state to the first item in the dropdown
     */
    focusOnOpen: PropTypes.bool,
  };

  static contextTypes = {
    closeDropdown: PropTypes.func,
  };

  static childContextTypes = {
    addMenuItem: PropTypes.func.isRequired,
    moveMenuItem: PropTypes.func.isRequired,
    removeMenuItem: PropTypes.func.isRequired,
    focusedIndex: PropTypes.string,
    setFocusedIndex: PropTypes.func.isRequired,
  };

  static typeRef = DropdownSourceRef;

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.addMenuItem = this.addMenuItem.bind(this);
    this.moveMenuItem = this.moveMenuItem.bind(this);
    this.removeMenuItem = this.removeMenuItem.bind(this);
    this.setFocusedIndex = this.setFocusedIndex.bind(this);

    this.scrollLock = false;
    this.menuItems = [];

    this.state = {
      focusedIndex: null,
    };
  }

  getChildContext() {
    return {
      addMenuItem: this.addMenuItem,
      focusedIndex: this.state.focusedIndex,
      moveMenuItem: this.moveMenuItem,
      removeMenuItem: this.removeMenuItem,
      setFocusedIndex: this.setFocusedIndex,
    };
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleDownPress() {
    this.setState(({ focusedIndex }) => ({
      focusedIndex: (focusedIndex)
        ? this.menuItems[
            Math.min(this.menuItems.indexOf(focusedIndex) + 1, this.menuItems.length - 1)
        ] : this.menuItems[0],
    }));
  }

  handleUpPress() {
    this.setState(({ focusedIndex }) => ({
      focusedIndex: (focusedIndex) ?
        this.menuItems[
          Math.max(this.menuItems.indexOf(focusedIndex) - 1, 0)
        ] : this.menuItems[this.menuItems.length],
    }));
  }

  addMenuItem(index) {
    this.menuItems = [...this.menuItems, index];
    this.setState(({ focusedIndex }, { focusOnOpen }) => ({
      focusedIndex: (focusOnOpen && !focusedIndex) ? index : focusedIndex,
    }));
  }

  removeMenuItem(index) {
    this.menuItems = this.menuItems.filter((_, p, arr) => p !== arr.indexOf(index));
    this.setState(({ focusedIndex }, { focusOnOpen }) => {
      focusedIndex = index === focusedIndex ? null : focusedIndex;
      return {
        focusedIndex: (focusOnOpen && this.menuItems.indexOf(focusedIndex) === -1)
          ? this.menuItems[0]
          : focusedIndex,
      };
    });
  }

  moveMenuItem(oldIndex, newIndex) {
    this.menuItems =
      [...this.menuItems.filter((_, p, arr) => p !== arr.indexOf(oldIndex)), newIndex];

    if (oldIndex === newIndex) return;

    this.setState(({ focusedIndex }) => ({
      focusedIndex: oldIndex === focusedIndex ? newIndex : focusedIndex,
    }));
  }

  handleKeyDown(event) {
    const { key } = event;
    const { closeDropdown } = this.context;

    switch (key) {
    case 'Escape':
      closeDropdown();
      break;
    case 'ArrowDown':
      event.preventDefault();
      this.scrollLock = true;
      this.handleDownPress();
      break;
    case 'ArrowUp':
      this.scrollLock = true;
      event.preventDefault();
      this.handleUpPress();
      break;
    default:
    }
  }

  handleKeyUp() {
    this.scrollLock = false;
  }

  setFocusedIndex(focusedIndex) {
    if (!this.scrollLock) this.setState({ focusedIndex });
  }

  render() {
    const { children, ...rest } = this.props;
    return cloneElement(children, omit(rest, ['focusOnOpen']));
  }
}
