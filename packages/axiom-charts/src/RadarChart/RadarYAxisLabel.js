import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from '@brandwatch/axiom-components';

export default class RadarYAxisLabel extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  };

  render() {
    const { children, x, y, ...rest } = this.props;

    return (
      <Text { ...rest }
          className="ax-radar__y-axis-label"
          style={ { top: `${y}px`, left: `${x}px` } }
          textColor="subtle"
          textSize="label">
        { children }
      </Text>
    );
  }
}
