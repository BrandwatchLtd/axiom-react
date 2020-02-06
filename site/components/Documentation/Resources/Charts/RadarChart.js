import React, { Component } from 'react';
import { RadarChart } from '@brandwatch/axiom-charts';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';
import DropdownContext from './DropdownContext';
import { radarChartData, radarChartXAxisLabels, radarChartYAxisLabels } from './chartData';

export default class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: radarChartXAxisLabels.length,
    };
  }

  render() {
    const { count } = this.state;
    const configurations = [[{
      name: 'Add X Axis',
      onClick: () => this.setState({ count: Math.min(radarChartXAxisLabels.length, count + 1) }),
    }, {
      name: 'Remove X Axis',
      onClick: () => this.setState({ count: Math.max(3, count - 1) }),
    }]];

    const xAxisLabels = radarChartXAxisLabels.slice(0, count);
    const data = radarChartData.map(({ values, ...rest }) => ({
      ...rest,
      values: values.slice(0, count),
    }));

    return (
      <DocumentationContent>
        <DocumentationShowCase configurations={ configurations }>
          <RadarChart
              DropdownContext={ DropdownContext }
              data={ data }
              height={ 400 }
              onPointClick={ () => {} }
              onXAxisLabelClick={ () => {} }
              width={ 600 }
              xAxisLabels={ xAxisLabels }
              yAxisLabels={ radarChartYAxisLabels } />
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/RadarChart/RadarChart'),
        ] } />
      </DocumentationContent>
    );
  }
}
