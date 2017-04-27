import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid } from 'bw-axiom';

export default class ChartKey extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <Grid { ...rest }
          horizontalAlign="middle"
          responsive={ false }
          shrink={ true }>
        { children }
      </Grid>
    );
  }
}
