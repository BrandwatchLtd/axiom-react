import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { BarChart, Bar, BarGroup } from 'bw-axiom';
import { sampleData } from './data';

export default class BarChartTwoSeries extends Component {
  render() {
    return (
      <Example name="Bar Chart - Two Data Series">
        <Snippet>
          <BarChart height="20rem">
            {
                  sampleData.series.map((options, key) =>
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