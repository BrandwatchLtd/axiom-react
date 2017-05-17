import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base, Small, Weak } from 'bw-axiom';
import './Bars.css';

export default class Bars extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(['up', 'right', 'down', 'left']),
    label: PropTypes.string,
    separated: PropTypes.bool,
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
    const { children, direction, label, separated, ...rest } = this.props;
    const classes = classnames('ax-bars', `ax-bars--${direction}`, {
      'ax-bars--separated': separated,
    });

    return (
      <Base { ...rest } className={ classes }>
        <div className="ax-bars__bars-container">
          <div className="ax-bars__bars">
            { children }
          </div>
        </div>

        { label && (
          <div className="ax-bars__label">
            <Small><Weak>{ label }</Weak></Small>
          </div>
        ) }
      </Base>
    );
  }
}
