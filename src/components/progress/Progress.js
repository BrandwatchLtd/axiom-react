import React, { Component, PropTypes } from 'react';
import { Base, IconIndicator, ProgressFinite, ProgressInfinite } from 'bw-axiom';

export default class Progress extends Component {

  static propTypes = {
    percent: PropTypes.number,
  };

  render() {
    const {
      percent,
      ...rest
    } = this.props;

    return (
      <Base { ...rest } className="ax-progress">
        { do { if (!isNaN(parseFloat(percent)) && percent < 100) {
          <ProgressFinite { ...rest } percent={ percent } />;
        } else if (percent === 100) {
          <IconIndicator { ...rest } color="success" name="tick" />;
        } else {
          <ProgressInfinite { ...rest } />;
        } } }
      </Base>
    );
  }
}
