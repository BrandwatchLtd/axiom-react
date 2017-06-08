import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { DotPlotChart, Grid, GridCell, Strong, Toggle } from 'bw-axiom';
import { chartKey, data } from './data';

export default class DotPlotChartExample extends Component {
  constructor(props) {
    super(props);
    this.state = { zoomed: true };
  }

  render() {
    const { zoomed } = this.state;

    return (
      <Example name="Zoomed DotPlotChart">
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
          <DotPlotChart
              axisTitle="% of each something"
              chartKey={ chartKey }
              chartKeyLineLabel="Size of Difference"
              collapsedVisibleRowCount={ 6 }
              data={ data }
              expandButtonSuffix="Categories"
              labelColumnWidth="11rem"
              zoom={ zoomed } />
        </Snippet>
      </Example>
    );
  }
}
