import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base, Small } from '@brandwatch/axiom-components';
import './Bars.css';

export default class Bars extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    /** Direction in which the bars will ascend to */
    direction: PropTypes.oneOf(['up', 'right', 'down', 'left']),
    /** The label placed at the start of the Bars  */
    label: PropTypes.string,
  };

  static childContextTypes = {
    direction: PropTypes.string.isRequired,
  };

  static defaultProps = {
    direction: 'up',
  };

  getChildContext() {
    return {
      direction: this.props.direction,
    };
  }

  render() {
    const { children, direction, label, ...rest } = this.props;
    const classes = classnames('ax-bars', `ax-bars--${direction}`);

    return (
      <Base {...rest} className={classes}>
        <div className="ax-bars__bars-container">
          <div className="ax-bars__bars">{children}</div>
        </div>

        {label && (
          <div className="ax-bars__label">
            <Small textColor="subtle">{label}</Small>
          </div>
        )}
      </Base>
    );
  }
}
