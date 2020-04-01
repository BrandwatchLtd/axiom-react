import React, { Component } from 'react';
import { DataPoint, DataPoints } from '@brandwatch/axiom-charts';
import { Grid, GridCell } from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <Grid responsive={false}>
            <GridCell>
              <DataPoints size="2rem">
                <DataPoint color="paradise-lost" />
                <DataPoint color="critical-mass" />
              </DataPoints>
            </GridCell>

            <GridCell>
              <DataPoints size="2rem">
                <DataPoint color="serene-sea" />
                <DataPoint color="giant-leap" />
              </DataPoints>
            </GridCell>

            <GridCell>
              <DataPoints size="2rem">
                <DataPoint color="new-horizon" />
                <DataPoint color="primeval-soup" />
              </DataPoints>
            </GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Grid/Grid'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Grid/GridCell'),
          ]}
        />
      </DocumentationContent>
    );
  }
}
