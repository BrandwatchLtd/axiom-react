import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Chart,
  ChartBody,
  ChartHeader,
  ChartTitle,
  DotPlotChart,
  Strong,
} from 'bw-axiom';
import { chartKey, data } from '../../dot-plot/example/data';

export default class ChartExample extends Component {
  render() {
    return (
      <Example name="Chart">
        <Snippet>
          <Chart>
            <ChartHeader>
              <ChartTitle>
                <Strong snippetReplace={ true }>Lorem Ipsum</Strong> (dolor sit amet)
              </ChartTitle>
            </ChartHeader>
            <ChartBody>
              <DotPlotChart
                  axisTitle="% of each something"
                  chartKey={ chartKey }
                  chartKeyDifferenceLabel="Size of Difference"
                  collapsedVisibleRowCount={ 6 }
                  data={ data }
                  expandButtonSuffix="Categories"
                  labelColumnWidth="11rem" />
            </ChartBody>
          </Chart>
        </Snippet>
      </Example>
    );
  }
}
