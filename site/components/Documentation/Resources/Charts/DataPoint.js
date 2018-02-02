import React, { Component } from 'react';
import { DataPoint, DataPoints } from '@brandwatch/axiom-charts';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase centered>
          <DataPoints onClick={ () => {} } size="4rem">
            <DataPoint color="giant-leap" />
            <DataPoint color="critical-mass" />
            <DataPoint color="new-horizon" />
          </DataPoints>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/DataPoint/DataPoint'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/DataPoint/DataPoints'),
        ] } />
      </DocumentationContent>
    );
  }
}
