import React, { Component } from 'react';
import { DocumentationViewer } from '@brandwatch/axiom-documentation-viewer';
import Bars from './Charts/Bars';
import BarChart from './Charts/BarChart';
import Chart from './Charts/Chart';
import DataPoint from './Charts/DataPoint';
import DotPlotChart from './Charts/DotPlotChart';
import WordCloud from './Charts/WordCloud';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationViewer
          config={ [{
            id: 'bars',
            name: 'Bars',
            Component: Bars,
          }, {
            id: 'bar-chart',
            name: 'Bar Chart',
            Component: BarChart,
          }, {
            id: 'chart',
            name: 'Chart',
            Component: Chart,
          }, {
            id: 'data-point',
            name: 'Data Point',
            Component: DataPoint,
          }, {
            id: 'dot-plot-chart',
            name: 'Dot Plot Chart',
            Component: DotPlotChart,
          }, {
            id: 'word-cloud',
            name: 'Word Cloud',
            Component: WordCloud,
          }] }
          path="/docs/packages/axiom-charts" />
    );
  }
}
