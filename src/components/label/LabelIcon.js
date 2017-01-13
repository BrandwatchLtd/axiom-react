import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { IconLink } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./LabelIcon.scss');
}

export default class LabelIcon extends Component {
  static propTypes = {
    isEnd: PropTypes.bool,
    isStart: PropTypes.bool,
    name: PropTypes.string.isRequired,
  };

  render () {
    const { isEnd, isStart, ...rest } = this.props;
    const classes = classnames('ax-label__icon', {
      'ax-label__icon--start': isStart,
      'ax-label__icon--end': isEnd,
    });

    return (
      <span className={ classes }>
        <IconLink { ...rest } />
      </span>
    );
  }
}
