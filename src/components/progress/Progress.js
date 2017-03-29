import React, { Component, PropTypes } from 'react';
import { Base, IconIndicator, ProgressFinite, ProgressInfinite } from 'bw-axiom';

export default class Progress extends Component {

  static propTypes = {
    complete: PropTypes.bool,
    error: PropTypes.bool,
    percent: PropTypes.number,
  };

  render() {
    const {
      complete,
      error,
      percent,
      ...rest
    } = this.props;

    return (
      <Base { ...rest } className="ax-progress">
        { do { if (error) {
          <IconIndicator { ...rest } color="error" name="warning" />;
        } else if (complete) {
          <IconIndicator { ...rest } color="success" name="tick" />;
        } else if (!isNaN(parseFloat(percent))) {
          <ProgressFinite { ...rest } percent={ percent } />;
        } else {
          <ProgressInfinite { ...rest } />;
        } } }
      </Base>
    );
  }
}
