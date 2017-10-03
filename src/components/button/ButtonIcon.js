import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '../icon/Icon';
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
  };

  static typeRef = ButtonIconRef;

  render () {
    const { isEnd, isStart, name, ...rest } = this.props;
    const classes = classnames('ax-button__icon', {
      'ax-button__icon--start': isStart,
      'ax-button__icon--end': isEnd,
    });

    return (
      <span { ...rest } className={ classes }>
        <Icon name={ name } />
      </span>
    );
  }
}
