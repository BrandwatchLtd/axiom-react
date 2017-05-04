import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Axis, AxisLabel, BarChart, Bar, BarGroup, Grid, GridCell } from 'bw-axiom';
import { sampleData } from './data';

export default class BarChartTwoSeries extends Component {
  render() {
    return (
      <Example name="Bar Chart - Two Data Series">
        <Snippet>
          <Grid>
            <GridCell full={ true }>
              <BarChart height="20rem">
                {
                  sampleData.series.map((options, key) =>
                    <BarGroup key={ key }>
                      { options.data.map((options, key) => <Bar key={ key } { ...options }></Bar>) }
                    </BarGroup>)
                }
              </BarChart>
            </GridCell>
            <GridCell>
              <Axis>
                {
                  sampleData.series.map((datapoint, index) =>
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