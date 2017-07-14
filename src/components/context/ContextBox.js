import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './ContextBox.css';

export default class ContextBox extends Component {
  static propTypes = {
    /** Padding size applied to the content area */
    padding: PropTypes.oneOf(['none', 'small', 'large']),
  };

  static defaultProps = {
    padding: 'large',
  };

  render() {
    const { padding, ...rest } = this.props;
    const classes = classnames('ax-context-box',
      `ax-context-box--padding-${padding}`,
    );

    return (
      <Base { ...rest } className={ classes } />
    );
  }
}
