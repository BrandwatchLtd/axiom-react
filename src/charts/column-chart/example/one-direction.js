import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  ColumnChart,
} from 'bw-axiom';
import { data, chartKey } from './data';

export default class ColumnChartExample extends Component {
  render() {
    return (
      <Example name="Single Direction ColumnChart">
        <Snippet>
          <ColumnChart
              chartKey={ chartKey }
              data={ data }
              height="20rem"
              showXAxisLabels={ true }/>
        </Snippet>
      </Example>
    );
  }
}
