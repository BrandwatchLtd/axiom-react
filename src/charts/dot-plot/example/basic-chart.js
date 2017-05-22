import React, { Component } from 'react';
import { CodeSnippet, Example, Snippet } from 'style-guide';
import { DotPlotChart, Paragraph } from 'bw-axiom';
import { chartKey, data } from './data';

export default class DotPlotChartExample extends Component {
  render() {
    return (
      <Example name="Basic DotPlotChart">
        <Paragraph>
          DotPlotChart automatically stacks dots which have the same value.
        </Paragraph>
        <Paragraph>
          DotPlotChart expects a data prop in this format:
        </Paragraph>
        <CodeSnippet language="js">{
`[{
  label: 'Label A',
  values: { blue: 0, pink: 98, lilac: 45},
}, {
  label: 'Label B',
  values: { blue: 90, pink: 10, lilac: 55 },
}, {
  label: 'Label C',
  values: { blue: 45, pink: 80, lilac: 20 },
}]`
        }</CodeSnippet>
        <Paragraph>
          And a chartKey prop in this format:
        </Paragraph>
        <CodeSnippet language="js">{
`[
  { color: 'blue', label: 'Data Set A' },
  { color: 'pink', label: 'Data Set B' },
  { color: 'lilac', label: 'Data Set C' },
]`
        }</CodeSnippet>
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
