import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { IconIndicator, ProgressFinite, ProgressInfinite } from 'bw-axiom';

export default class Progress extends Component {

  static propTypes = {
    complete: PropTypes.bool,
    error: PropTypes.bool,
    percent: PropTypes.number,
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
      return <IconIndicator { ...rest } color="error" name="warning" />;
    }

    if (complete) {
      return <IconIndicator { ...rest } color="success" name="tick" />;
    }

    if (!isNaN(parseFloat(percent))) {
      return <ProgressFinite { ...rest } percent={ percent } />;
    }

    return <ProgressInfinite { ...rest } />;
  }
}
