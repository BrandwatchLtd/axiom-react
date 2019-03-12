import React, { Component } from 'react';
import { Flag, Grid, GridCell } from '@brandwatch/axiom-components';
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
          <Grid responsive={ false }>
            <GridCell><Flag alpha2="gb" size="12rem" /></GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Flag/Flag'),
        ] } />
      </DocumentationContent>
    );
  }
}
