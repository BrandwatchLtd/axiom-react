import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Axis, AxisLabel, BarChart, Bar, BarGroup, Grid, GridCell } from 'bw-axiom';
import { sampleDataWithLabels } from './dataWithLabels';

export default class BarChartTwoSeriesWithRatios extends Component {
  render() {
    return (
      <Example name="Bar Chart With Group Labels">
        <Snippet>
          <Grid>
            <GridCell full={ true }>
              <BarChart height="20rem">
                {
                  sampleDataWithLabels.series.map((options, key) =>
                    <BarGroup key={ key }>
                      { options.data.map((options, key) => <Bar key={ key } { ...options }></Bar>) }
                    </BarGroup>)
                }
              </BarChart>
            </GridCell>
            <GridCell>
              <Axis>
                {
                  sampleDataWithLabels.series.map((datapoint, index) =>
                    <AxisLabel key={ index }
                        mainLabel={ datapoint.label } secondLabel={ `${datapoint.ratio}%` }>
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