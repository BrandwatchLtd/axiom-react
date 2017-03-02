import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ChartHeading, Strong } from 'bw-axiom';

export default class ChartHeadingExample extends Component {
  render() {
    return (
      <Example name="ChartHeading">
        <Snippet>
          <ChartHeading>
            Chart heading standard / <Strong>Chart heading strong</Strong>
          </ChartHeading>
        </Snippet>
      </Example>
    );
  }
}
