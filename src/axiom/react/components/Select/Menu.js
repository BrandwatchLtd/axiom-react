import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import List from './List';

class Menu extends Component {
  componentDidUpdate() {
    const { open, flipMenu } = this.props;

    if (!open) {
      return;
    }

    const menuEl = ReactDOM.findDOMNode(this.refs.menu);
    const menuRect = menuEl.getBoundingClientRect();

    if (menuRect.top + menuRect.height < window.innerHeight) {
      return;
    }

    flipMenu();
  }

  render() {
    const {
      activeItem,
      itemRenderer,
      visibleItems,
      menuStyle,
      open = true,
      onFilterItems,
      onHoverItem,
      onItemSelected,
      onKeyDown,
    } = this.props;

    if (!open) {
      return null;
    }

    return (
      <div className="pickadilly__menu" ref="menu" style={ menuStyle } >
        <Search onFilterItems={ onFilterItems } onKeyDown={ onKeyDown } />
        <List
            activeItem={ activeItem }
            itemRenderer={ itemRenderer }
            onHoverItem={ onHoverItem }
            onItemSelected={ onItemSelected }
            onKeyDown={ onKeyDown }
            visibleItems={ visibleItems } />
      </div>
    );
  }
}

Menu.propTypes = {
  activeItem: PropTypes.object,
  flipMenu: PropTypes.func,
  itemRenderer: PropTypes.func,
  menuStyle: PropTypes.object,
  open: PropTypes.bool,
  visibleItems: PropTypes.array,
  onFilterItems: PropTypes.func,
  onHoverItem: PropTypes.func,
  onItemSelected: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Menu;
