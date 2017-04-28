import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { BarChart, Bar, BarGroup } from 'bw-axiom';
import { sampleDataWithLabels } from './dataWithLabels';

export default class BarChartTwoSeriesWithRatios extends Component {
  render() {
    return (
      <Example name="Bar Chart With Group Labels">
        <Snippet>
          <BarChart height="20rem">
            {
                sampleDataWithLabels.series.map((options, key) =>
                  <BarGroup key={ key } label={ options.label } ratio={ options.ratio }>
                    { options.data.map((options, key) => <Bar key={ key } { ...options }></Bar>) }
                  </BarGroup>)
                }
          </BarChart>
        </Snippet>
      </Example>
    );
  }
}