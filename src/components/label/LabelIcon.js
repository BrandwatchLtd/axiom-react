import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '../icon/Icon';
import Link from '../typography/Link';
import './LabelIcon.css';

export const LabelIconRef = 'LabelIcon';

export default class LabelIcon extends Component {
  static propTypes = {
    /** SKIP */
    color: PropTypes.string,
    /** SKIP */
    isEnd: PropTypes.bool,
    /** SKIP */
    isStart: PropTypes.bool,
    /** Name of the icon. See <Icon>. */
    name: PropTypes.string.isRequired,
  };

  static typeRef = LabelIconRef;

  render() {
    const { color, isEnd, isStart, name, ...rest } = this.props;
    const classes = classnames('ax-label__icon', {
      'ax-label__icon--start': isStart,
      'ax-label__icon--end': isEnd,
    });

    const linkStyle = {
      white: 'subtle',
      success: 'night',
      error: 'night',
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
