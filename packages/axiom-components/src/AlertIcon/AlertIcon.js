import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Icon from '../Icon/Icon';
import './AlertIcon.css';

export const ALERT_ICON_NAME_MAP = {
  error: 'warning',
  info: 'information',
  success: 'tick',
  warning: 'warning',
};

const SIZE_MAP = {
  small: '1rem',
  medium: '2rem',
  large: '3rem',
};

export default class AlertIcon extends Component {
  static propTypes = {
    /** Size of the indicator and icon */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Style of the indicator */
    style: PropTypes.oneOf(['primary', 'secondary', 'subtle']),
    /** Color of the indicator and icon */
    type: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  };

  static defaultProps = {
    size: 'small',
    style: 'primary',
    type: 'info',
  };

  render() {
    const { size, style, type, ...rest } = this.props;
    const classes = classnames(
      'ax-alert-icon',
      `ax-alert-icon--${style}`,
      `ax-alert-icon--${size}`,
      `ax-alert-icon--${type}`
    );

    return (
      <Base { ...rest } className={ classes }>
        <Icon name={ ALERT_ICON_NAME_MAP[type] } size={ SIZE_MAP[size] } />
      </Base>
    );
  }
}
