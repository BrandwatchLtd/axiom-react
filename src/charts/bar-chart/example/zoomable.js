import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { BarChart, Grid, GridCell, Strong, Toggle } from 'bw-axiom';
import { chartKey, data } from './data';

export default class BarChartChartExample extends Component {
  constructor(props) {
    super(props);
    this.state = { zoomed: true };
  }

  render() {
    const { zoomed } = this.state;

    return (
      <Example name="Zoomed BarChart">
        <Grid
            gutters="tiny"
            horizontalAlign="end"
            responsive={ false }
            shrink={ true }
            verticalAlign="middle">
          <GridCell><Strong>Zoom</Strong></GridCell>
          <GridCell>
            <Toggle
                onToggle={ () => this.setState({ zoomed: !zoomed }) }
                toggled={ zoomed } />
          </GridCell>
        </Grid>

        <Snippet>
          <BarChart
              axisTitle="% of something"
              chartKey={ chartKey }
              data={ data }
              labelColumnWidth="11rem"
              zoom={ zoomed } />
        </Snippet>
      </Example>
    );
  }
}
