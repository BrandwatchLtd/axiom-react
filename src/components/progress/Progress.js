import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AlertIcon, ProgressFinite, ProgressInfinite } from 'bw-axiom';

export default class Progress extends Component {
  static propTypes = {
    /** Shows a successful completion state */
    complete: PropTypes.bool,
    /** Shows an error state */
    error: PropTypes.bool,
    /** Percentage of progress */
    percent: PropTypes.number,
    /** Size of the indicator */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'small',
  };

  render() {
    const {
      complete,
      error,
      percent,
      ...rest
    } = this.props;

    if (error) {
      return <AlertIcon { ...rest } type="error" />;
    }

    if (complete) {
      return <AlertIcon { ...rest } type="success" />;
    }

    if (!isNaN(parseFloat(percent))) {
      return <ProgressFinite { ...rest } percent={ percent } />;
    }

    return <ProgressInfinite { ...rest } />;
  }
}
