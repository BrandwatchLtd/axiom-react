import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Grid,
  GridCell,
  Strong,
} from 'bw-axiom';

export default class ChartKeyItem extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
  }

  render() {
    const { children, label, ...rest } = this.props;

    return (
      <GridCell>
        <Grid { ...rest }
            gutters="tiny"
            responsive={ false }
            shrink={ true }
            verticalAlign="middle">
          <GridCell>
            { children }
          </GridCell>
          <GridCell>
            <Strong textColor="subtle">{ label }</Strong>
          </GridCell>
        </Grid>
      </GridCell>
    );
  }
}
