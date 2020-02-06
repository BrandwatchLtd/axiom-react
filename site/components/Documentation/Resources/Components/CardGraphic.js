import React, { Component } from 'react';
import { Ghost, Grid, GridCell } from '@brandwatch/axiom-components';
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
            <GridCell><Ghost /></GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/CardGraphic/Ghost'),
        ] } />
      </DocumentationContent>
    );
  }
}
