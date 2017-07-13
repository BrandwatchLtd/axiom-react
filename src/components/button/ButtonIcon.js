import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Icon } from 'bw-axiom';
import './ButtonIcon.css';

export default class ButtonIcon extends Component {
  static propTypes = {
    /**
     * Whether the ButtonIcon is at the end of a button. If true,
     * it will apply spacing from the text.
     */
    isEnd: PropTypes.bool,
    /**
     * Whether the ButtonIcon is at the start of a button. If true,
     * it will apply spacing from the text.
     */
    isStart: PropTypes.bool,
    /** Name of the Icon */
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
