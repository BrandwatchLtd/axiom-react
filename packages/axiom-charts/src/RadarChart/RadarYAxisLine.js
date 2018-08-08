import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class RadarXAxisLine extends Component {
  static propTypes = {
    r: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  };

  render() {
    const { r, x, y, ...rest } = this.props;

    return (
      <circle { ...rest }
          className="ax-radar__x-axis-line"
          cx={ x }
          cy={ y }
          key={ r }
          r={ r } />
    );
  }
}
