import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Icon, DockItem } from 'bw-axiom';
import './DockIconLink.css';

export default class DockIconLink extends Component {
  static propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.string,
  };

  render() {
    const { icon, active, ...rest } = this.props;
    const classes = classnames('ax-platform__dock-icon-link', {
      'ax-platform__dock-icon-link--active': active,
    });

    return (
      <DockItem>
        <a { ...rest } className={ classes }>
          <Icon name={ icon } size="2rem" />
        </a>
      </DockItem>
    );
  }
}
