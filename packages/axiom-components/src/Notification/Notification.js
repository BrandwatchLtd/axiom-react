import atIds from '@brandwatch/axiom-automation-testing/ids';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import omit from 'lodash.omit';
import { ALERT_ICON_NAME_MAP } from '../AlertIcon/AlertIcon';
import Base from '../Base/Base';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';
import './Notification.css';

export default class Notification extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onAppear: PropTypes.func,
    onRemoveClick: PropTypes.func,
    type: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
  };

  componentDidMount() {
    const { onAppear } = this.props;

    if (onAppear) {
      onAppear();
    }
  }

  render() {
    const { children, type, onRemoveClick, ...rest } = this.props;
    const classes = classnames('ax-notification', `ax-notification--${type}`);

    return (
      <Base
        {...omit(rest, ['onAppear'])}
        className={classes}
        textColor="subtle"
      >
        <div className="ax-notification__icon">
          <Icon name={ALERT_ICON_NAME_MAP[type]} size="2rem" />
        </div>

        <div className="ax-notification__messsage">{children}</div>

        {onRemoveClick && (
          <div className="ax-notification__remove">
            <Link
              data-ax-at={atIds.Notification.close}
              onClick={() => onRemoveClick()}
              style="subtle"
            >
              <Icon name="cross" />
            </Link>
          </div>
        )}
      </Base>
    );
  }
}
