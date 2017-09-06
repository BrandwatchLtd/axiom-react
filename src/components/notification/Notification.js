import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import omit from 'lodash.omit';
import { Base, Icon, Link } from 'bw-axiom';
import './Notification.css';

const TYPE_ICON_MAP = {
  error: 'warning',
  info: 'information',
  success: 'tick',
  warning: 'warning',
};

export default class Notification extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf([
      'error',
      'info',
      'success',
      'warning',
    ]).isRequired,
    onAppear: PropTypes.func,
    onRemoveClick: PropTypes.func,
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
      <Base { ...omit(rest, ['onAppear']) } className={ classes } textColor="subtle" theme="light">
        <div className="ax-notification__icon">
          <Icon name={ TYPE_ICON_MAP[type] } size="2rem" />
        </div>

        <div className="ax-notification__messsage">
          { children }
        </div>

        { onRemoveClick && (
          <div className="ax-notification__remove">
            <Link onClick={ () => onRemoveClick() } style="subtle">
              <Icon name="cross" />
            </Link>
          </div>
        ) }
      </Base>
    );
  }
}
