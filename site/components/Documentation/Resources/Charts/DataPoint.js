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
        <Grid>
          <GridCell>
            <DocumentationShowCase centered>
              <DataPoints onClick={() => {}} size="4rem">
                <DataPoint color="giant-leap" />
                <DataPoint color="critical-mass" />
                <DataPoint color="new-horizon" />
              </DataPoints>
            </DocumentationShowCase>
          </GridCell>

          <GridCell>
            <DocumentationShowCase centered>
              <Grid shrink>
                <GridCell>
                  <DataPoints onClick={() => {}} size="2rem">
                    <DataPoint color="giant-leap" style="hollow" />
                  </DataPoints>
                </GridCell>

                <GridCell>
                  <DataPoints onClick={() => {}} size="2rem">
                    <DataPoint color="critical-mass" style="hollow" />
                  </DataPoints>
                </GridCell>

                <GridCell>
                  <DataPoints onClick={() => {}} size="2rem">
                    <DataPoint color="new-horizon" style="hollow" />
                  </DataPoints>
                </GridCell>
              </Grid>
            </DocumentationShowCase>
          </GridCell>
        </Grid>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/DataPoint/DataPoint'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/DataPoint/DataPoints'),
          ]}
        />
      </DocumentationContent>
    );
  }
}
