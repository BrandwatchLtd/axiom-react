import React, { Component } from 'react';
import { BarChart } from '@brandwatch/axiom-charts';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';
import { dotPlotKey, dotPlotData } from './chartData';
import DropdownContext from './DropdownContext';

export default class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenRows: {},
    };
  }

  handleToggleRowVisibility(index) {
    const { hiddenRows } = this.state;

    this.setState({
      hiddenRows: {
        ...hiddenRows,
        [index]: !hiddenRows[index],
      },
    });
  }

  render() {
    const { hiddenRows } = this.state;

    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <BarChart
              BenchmarkTooltipContext={ DropdownContext }
              DropdownContext={ DropdownContext }
              TooltipContext={ DropdownContext }
              axisTitle="% of each something"
              chartKey={ dotPlotKey }
              chartKeyBenchmarkLabel="Benchmark"
              collapsedVisibleRowCount={ 4 }
              data={ dotPlotData.map((_, i) => ({ ..._, hidden: hiddenRows[i] })) }
              expandButtonSuffix="Categories"
              labelColumnWidth="11rem"
              lower={ 0 }
              onToggleRowVisibility={ (a, b, data, i) => this.handleToggleRowVisibility(i) }
              upper={ 100 }
              xAxisLabels={ () => [ '0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'] }/>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/BarChart/BarChart'),
        ] } />
      </DocumentationContent>
    );
  }
}
