import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid } from 'bw-axiom';

export default class StatCards extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Grid { ...rest }
          fill={ true }
          gutters="tiny"
          space="medium">
        { children }
      </Grid>
    );
  }
}
