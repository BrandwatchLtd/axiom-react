import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import { getScrollIntoViewOffset } from './helpers';

class List extends Component {
  componentDidUpdate () {
    if (!this.refs.active) {
      return;
    }

    const menuEl = ReactDOM.findDOMNode(this.refs.menu);
    const activeItemEl = ReactDOM.findDOMNode(this.refs.active);

    menuEl.scrollTop = getScrollIntoViewOffset(menuEl, activeItemEl);
  }

  render() {
    const { activeItem, itemRenderer, visibleItems, onHoverItem, onItemSelected, onKeyDown } = this.props;

    return (
      <ul className="pickadilly__list" onKeyDown={ onKeyDown } ref="menu">
      {
        visibleItems.map((item, index) => itemRenderer({
          data: item,
          active:  item === activeItem,
          key:  index,
          onHoverItem:  onHoverItem.bind(this, item),
          onItemSelected:  onItemSelected.bind(this, item),
          ref:  item === activeItem ? 'active' : null,
        }))
      }
      </ul>
    );
  }
}

List.propTypes = {
  activeItem: PropTypes.object,
  itemRenderer: PropTypes.func,
  visibleItems: PropTypes.array,
  onHoverItem: PropTypes.func,
  onItemSelected: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
};

export default List;
