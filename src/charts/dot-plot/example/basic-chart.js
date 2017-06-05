import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { DotPlotChart } from 'bw-axiom';
import { chartKey, data } from './data';

export default class DotPlotChartExample extends Component {
  render() {
    return (
      <Example name="Basic DotPlotChart">
        <Snippet>
          <DotPlotChart
              chartKey={ chartKey }
              chartKeyLineLabel="Size of Difference"
              data={ data }
              labelColumnWidth="11rem" />
        </Snippet>
      </Example>
    );
  }
}
