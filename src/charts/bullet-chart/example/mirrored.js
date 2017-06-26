import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Heading,
  MirroredBulletChart,
  Weak,
} from 'bw-axiom';
import { data, chartKey } from './data';

export default class MirroredBulletChartExample extends Component {
  render() {
    return (
      <Example name="Mirrored BulletChart">
        <Snippet>
          <MirroredBulletChart
              chartKey={ chartKey }
              data={ data }
              height="10rem"
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
              }
              showBarLabels={ true }/>
        </Snippet>
      </Example>
    );
  }
}
