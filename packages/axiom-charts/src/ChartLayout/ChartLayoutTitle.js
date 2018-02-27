import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from '@brandwatch/axiom-components';

export default class ChartLayoutTitle extends Component {
  static propTypes = {
    axis: PropTypes.oneOf(['x', 'y']).isRequired,
  };

  render() {
    const { axis, ...rest } = this.props;

    return (
      <Base { ...rest }
          className={ `ax-chart-layout__${axis}-title` }
          textCenter
          textColor="subtle"
          textSize="small" />
    );
  }
}
