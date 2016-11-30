import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Icon from '../icon/Icon';

if (__INCLUDE_CSS__) {
  require('./DockItem.scss');
}

export default class DockItem extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
  };

  render() {
    const { icon, isActive, onClick } = this.props;
    const classes = classnames('ax-platform__dock-item', {
      'ax-platform__dock-item--active': isActive,
    });

    return (
      <li className={ classes }>
        <a className="ax-platform__dock-item-link" onClick={ onClick }>
          <Icon name={ icon } size="large" />
        </a>
      </li>
    );
  }
}
