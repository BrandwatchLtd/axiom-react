import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Icon, Link } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./LabelIcon.scss');
}

export default class LabelIcon extends Component {
  static propTypes = {
    color: PropTypes.string,
    isEnd: PropTypes.bool,
    isStart: PropTypes.bool,
    name: PropTypes.string.isRequired,
  };

  render () {
    const { color, isEnd, isStart, name, ...rest } = this.props;
    const classes = classnames('ax-label__icon', {
      'ax-label__icon--start': isStart,
      'ax-label__icon--end': isEnd,
    });

    const linkStyle = {
      white: 'subtle',
      success: 'light',
      error: 'light',
    }[color];

    return (
      <span className={ classes }>
        <Link { ...rest } style={ linkStyle }>
          <Icon name={ name } size="1rem" />
        </Link>
      </span>
    );
  }
}
