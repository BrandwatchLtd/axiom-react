import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Icon } from 'bw-axiom';
import './ButtonIcon.css';

export default class ButtonIcon extends Component {
  static propTypes = {
    isEnd: PropTypes.bool,
    isStart: PropTypes.bool,
    name: PropTypes.string.isRequired,
  };

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
