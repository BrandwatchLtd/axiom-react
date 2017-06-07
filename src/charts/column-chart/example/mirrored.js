import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Heading,
  MirroredColumnChart,
  Weak,
} from 'bw-axiom';
import { data, chartKey } from './data';

export default class ColumnChartExample extends Component {
  render() {
    return (
      <Example name="Mirrored ColumnChart">
        <Snippet>
          <MirroredColumnChart
              chartKey={ chartKey }
              data={ data }
              height="20rem"
              label={
                <Heading style="display">
                  <Weak>57%</Weak>
                </Heading>
              }
              labelColumnWidth="10rem"
              reflectionData={ data }
              reflectionLabel={
                <Heading style="display">
                  <Weak>67%</Weak>
                </Heading>
              }/>
        </Snippet>
      </Example>
    );
  }
}
