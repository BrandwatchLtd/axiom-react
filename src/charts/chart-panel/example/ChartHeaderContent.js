import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, GridCell, Icon, Link, Strong } from 'bw-axiom';

export default class ChartHeaderContent extends Component {
  static propTypes = {
    alignment: PropTypes.string,
    alignmentText: PropTypes.string,
  };

  render() {
    const { alignment, alignmentText } = this.props;
    return (
      <Grid responsive={ false } verticalAlign="middle">
        <GridCell>
          <Strong>Chart Header</Strong> { alignmentText } { alignment }
        </GridCell>

        <GridCell shrink={ true }>
          <Link style="inherit">
            <Icon name="question-mark-circle" />
          </Link>
        </GridCell>
      </Grid>
    );
  }
}
