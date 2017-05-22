import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { DotPlotChart } from 'bw-axiom';
import { chartKey, data } from './data';

export default class DotPlotChartExample extends Component {
  render() {
    return (
      <Example name="Collapsible DotPlotChart with Custom X Labels">
        <Snippet>
          <DotPlotChart
              axisTitle="% of each something"
              chartKey={ chartKey }
              chartKeyLineLabel="Size of Difference"
              collapsedVisibleRowCount={ 6 }
              data={ data }
              expandButtonSuffix="Categories"
              labelColumnWidth="11rem"
              xAxisLabels={ [ '0%', '20%', '40%', '60%', '80%', '100%' ] } />
        </Snippet>
      </Example>
    );
  }
}
