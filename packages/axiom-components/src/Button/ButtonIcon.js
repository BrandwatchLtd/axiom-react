import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '../Icon/Icon';
import './ButtonIcon.css';

export const ButtonIconRef = 'ButtonIcon';

export default class ButtonIcon extends Component {
  static propTypes = {
    /** SKIP */
    isEnd: PropTypes.bool,
    /** SKIP */
    isStart: PropTypes.bool,
    /** Name of the Icon */
    name: PropTypes.string.isRequired,
    /** Size of the Icon */
    size: PropTypes.string,
    /** Color of the Icon */
    color: PropTypes.string,
  };

  static defaultProps = {
    size: '1rem',
  };

  static typeRef = ButtonIconRef;

  render() {
    const { isEnd, isStart, name, size, color, ...rest } = this.props;
    const classes = classnames('ax-button__icon', {
      'ax-button__icon--start': isStart,
      'ax-button__icon--end': isEnd,
    });

    return (
      <span { ...rest } className={ classes }>
        <Icon name={ name } size={ size } textColor={ color }/>
      </span>
    );
  }
}
