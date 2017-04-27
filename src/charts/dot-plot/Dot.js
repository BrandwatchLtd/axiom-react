import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DataPoint } from 'bw-axiom';
import omit from 'lodash.omit';

export default class Dot extends Component {
  static propTypes = {
    /* eslint-disable react/no-unused-prop-types*/
    percent: PropTypes.number.isRequired,
    /* eslint-enable react/no-unused-prop-types*/
  };

  render() {
    return (
      <DataPoint { ...omit(this.props, ['percent']) } />
    );
  }
}
