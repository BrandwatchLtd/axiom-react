import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Grid from '../grid/Grid';

export default class StatCards extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Grid { ...rest }
          fill
          gutters="tiny"
          space="x6">
        { children }
      </Grid>
    );
  }
}
