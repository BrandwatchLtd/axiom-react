import React, { Component } from 'react';
import { BarChart } from '@brandwatch/axiom-charts';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';
import { dotPlotKey, dotPlotData } from './chartData';
import ChartNLP from './ChartNLP';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <BarChart
              DropdownContext={ ChartNLP }
              axisTitle="% of each something"
              chartKey={ dotPlotKey }
              chartKeyBenchmarkLabel="Benchmark"
              collapsedVisibleRowCount={ 4 }
              data={ dotPlotData }
              expandButtonSuffix="Categories"
              labelColumnWidth="11rem"
              lower={ 0 }
              showBarLabel={ true }
              upper={ 100 } />
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/BarChart/BarChart'),
        ] } />
      </DocumentationContent>
    );
  }
}
