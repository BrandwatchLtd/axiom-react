import React, { Component } from 'react';
import { SparkLine } from '@brandwatch/axiom-charts';
import { Grid, GridCell } from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';
import { sparkLineBenchmark, sparkLineData, sparkLineEmptyData, sparkLineNoDifferenceData } from './chartData';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <Grid>
            <GridCell>
              <SparkLine
                  benchmark={ sparkLineBenchmark }
                  data={ sparkLineData }
                  height="5rem"
                  pointColor="tiny-clanger" />
            </GridCell>
            <GridCell>
              <SparkLine
                  data={ sparkLineEmptyData }
                  height="5rem"
                  pointColor="critical-mass" />
            </GridCell>
          </Grid>

          <Grid>
            <GridCell>
              <SparkLine
                  data={ sparkLineNoDifferenceData }
                  height="5rem"
                  pointColor="paradise-lost" />
            </GridCell>
            <GridCell>
              <SparkLine
                  data={ sparkLineData }
                  height="5rem"
                  pointColor="giant-leap" />
            </GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/SparkLine/SparkLine'),
        ] } />
      </DocumentationContent>
    );
  }
}
