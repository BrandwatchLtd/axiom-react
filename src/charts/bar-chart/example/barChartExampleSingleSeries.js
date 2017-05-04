import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Axis, AxisLabel, BarChart, Bar, BarGroup, Grid, GridCell } from 'bw-axiom';
import { dataSingleSeries } from './dataSingleSeries';

export default class BarChartExampleSingleSeries extends Component {
  render() {
    return (
      <Example name="Bar Chart">
        <Snippet>
          <Grid>
            <GridCell full={ true }>
              <BarChart height="20rem">
                {
                  dataSingleSeries.series.map((options, key) =>
                    <BarGroup key={ key }>
                      { options.data.map((options, key) => <Bar key={ key } { ...options }></Bar>) }
                    </BarGroup>)
                }
              </BarChart>
            </GridCell>
            <GridCell full={ true }>
              <Axis>
                {
                  dataSingleSeries.series.map((datapoint, index) =>
                    <AxisLabel key={ index }
                        mainLabel={ datapoint.label }>
                    </AxisLabel>)
                }
              </Axis>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}