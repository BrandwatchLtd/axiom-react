import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { BarChart } from 'bw-axiom';
import { chartKey, data } from './data';

export default class BarChartExample extends Component {
  render() {
    return (
      <Example name="Basic BarChart">
        <Snippet>
          <BarChart
              axisTitle="% of something"
              chartKey={ chartKey }
              data={ data }
              labelColumnWidth="11rem" />
        </Snippet>
      </Example>
    );
  }
}
