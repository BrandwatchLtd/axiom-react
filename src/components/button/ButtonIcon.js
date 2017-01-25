import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Icon } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ButtonIcon.scss');
}

export default class ButtonIcon extends Component {
  static propTypes = {
    isEnd: PropTypes.bool,
    isStart: PropTypes.bool,
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'medium',
  };

  render () {
    const { isEnd, isStart, name, size, ...rest } = this.props;
    const classes = classnames('ax-button__icon', {
      'ax-button__icon--start': isStart,
      'ax-button__icon--end': isEnd,
    });

    const sizeMap = {
      'small': '0.75rem',
      'medium': '0.75rem',
      'large': '1rem',
    };

    return (
      <span { ...rest } className={ classes }>
        <Icon name={ name } size={ sizeMap[size] } />
      </span>
    );
  }
}
