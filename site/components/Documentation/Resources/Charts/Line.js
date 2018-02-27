import React, { Component } from 'react';
import { Line, LinePoint } from '@brandwatch/axiom-charts';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';
import { lineChartData } from './chartData';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <Line
              color="critical-mass"
              data={ lineChartData[0].values }
              height="12rem">
            { lineChartData[0].values.map((_, index) =>
              <LinePoint
                  color="critical-mass"
                  key={ index }
                  size=".75rem" />
            ) }
          </Line>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/Line/Line'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/Line/LinePoint'),
        ] } />
      </DocumentationContent>
    );
  }
}
