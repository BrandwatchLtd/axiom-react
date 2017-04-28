import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { BarChart, Bar, BarGroup } from 'bw-axiom';
import { dataSingleSeries } from './dataSingleSeries';

export default class BarChartExampleSingleSeries extends Component {
  render() {
    return (
      <Example name="Bar Chart">
        <Snippet>
          <BarChart height="20rem">
            {
              dataSingleSeries.series.map((options, key) =>
                <BarGroup key={ key } label={ options.label }>
                  { options.data.map((options, key) => <Bar key={ key } { ...options }></Bar>) }
                </BarGroup>)
                }
          </BarChart>
        </Snippet>
      </Example>
    );
  }
}