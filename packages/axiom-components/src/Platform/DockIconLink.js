import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Icon from '../Icon/Icon';
import DockItem from './DockItem';

export default class DockIconLink extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.string,
  };

  render() {
    const { icon, active, ...rest } = this.props;
    const classes = classnames('ax-dock__icon-link', {
      'ax-dock__icon-link--active': active,
    });

    return (
      <DockItem>
        <Base Component="a" { ...rest } className={ classes }>
          <Icon name={ icon } size="2rem" />
        </Base>
      </DockItem>
    );
  }
}
