import React, { Component } from 'react';
import { DotPlotChart } from '@brandwatch/axiom-charts';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';
import DropdownContext from './DropdownContext';
import { dotPlotData, dotPlotKey } from './chartData';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <DotPlotChart
              DropdownContext={ DropdownContext }
              axisTitle="% of each something"
              chartKey={ dotPlotKey }
              chartKeyBenchmarkLabel="Benchmark"
              chartKeyDifferenceLabel="Size of Difference"
              collapsedVisibleRowCount={ 6 }
              data={ dotPlotData }
              expandButtonSuffix="Categories"
              labelColumnWidth="11rem"
              lower={ 0 }
              upper={ 100 }
              xAxisLabels={ [ '0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'] }/>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/DotPlotChart/DotPlotChart'),
        ] } />
      </DocumentationContent>
    );
  }
}
