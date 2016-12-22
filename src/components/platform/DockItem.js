import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Icon from '../icon/Icon';

if (__INCLUDE_CSS__) {
  require('./DockItem.scss');
}

export default class DockItem extends Component {
  static propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  render() {
    const { icon, active, onClick } = this.props;
    const classes = classnames('ax-platform__dock-item', {
      'ax-platform__dock-item--active': active,
    });

    return (
      <li className={ classes }>
        <a className="ax-platform__dock-item-link" onClick={ onClick }>
          <Icon name={ icon } size={ 24 } />
        </a>
      </li>
    );
  }
}
