import React, { Component } from 'react';
import { LineChart } from '@brandwatch/axiom-charts';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';
import DropdownContext from './DropdownContext';
import TooltipContext from './TooltipContext';
import { lineChartData, lineChartKey, lineChartXAxisLabels } from './chartData';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <LineChart
            DropdownContext={DropdownContext}
            TooltipContext={TooltipContext}
            chartKey={lineChartKey}
            data={lineChartData}
            height="12rem"
            lower={0}
            upper={30}
            xAxisLabels={lineChartXAxisLabels}
            xAxisTitle="Previous 30 days"
            yAxisLabels={[
              { label: '0M', value: 0 },
              { label: '10M', value: 10 },
              { label: '20M', value: 20 },
              { label: '30M', value: 30 },
            ]}
            yAxisTitle="Volume of Total Mentions Daily"
          />
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/LineChart/LineChart'),
          ]}
        />
      </DocumentationContent>
    );
  }
}
