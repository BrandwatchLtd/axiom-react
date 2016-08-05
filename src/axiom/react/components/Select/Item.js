import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

class Item extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { active , onItemSelected, onHoverItem, data: { label } } = this.props;

    return (
      <li className={ classnames('pickadilly__item', { 'pickadilly__item--active': active }) }
          onClick={ onItemSelected }
          onMouseEnter={ onHoverItem }>
        { label }
      </li>
    );
  }
}

Item.propTypes = {
  active: PropTypes.bool,
  data: PropTypes.any,
  label: PropTypes.string,
  onHoverItem: PropTypes.func,
  onItemSelected: PropTypes.func,
};

export default Item;
