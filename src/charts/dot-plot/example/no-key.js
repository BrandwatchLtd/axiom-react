import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { DotPlotChart } from 'bw-axiom';
import { chartKey, data } from './data';

export default class DotPlotChartExample extends Component {
  render() {
    return (
      <Example name="DotPlotChart without chart key or title">
        <Snippet>
          <DotPlotChart
              chartKey={ chartKey }
              data={ data }
              labelColumnWidth="11rem"
              showKey={ false } />
        </Snippet>
      </Example>
    );
  }
}
