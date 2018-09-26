import React, { Component } from 'react';
import { DocumentationViewer } from '@brandwatch/axiom-documentation-viewer';
import Chart from './Highcharts/Chart';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationViewer
          config={ [{
            id: 'chart',
            name: 'Chart',
            Component: Chart,
          }] }
          path="/docs/packages/axiom-highcharts" />
    );
  }
}
