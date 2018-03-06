import React, { Component } from 'react';
import { DotPlotChart } from '@brandwatch/axiom-charts';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';
import ChartNLP from './ChartNLP';
import { dotPlotData, dotPlotKey } from './chartData';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <DotPlotChart
              DropdownContext={ ChartNLP }
              axisTitle="% of each something"
              chartKey={ dotPlotKey }
              chartKeyBenchmarkLabel="Benchmark"
              chartKeyDifferenceLabel="Size of Difference"
              collapsedVisibleRowCount={ 6 }
              data={ dotPlotData }
              expandButtonSuffix="Categories"
              labelColumnWidth="11rem"
              lower={ 0 }
              upper={ 100 } />
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/DotPlotChart/DotPlotChart'),
        ] } />
      </DocumentationContent>
    );
  }
}
