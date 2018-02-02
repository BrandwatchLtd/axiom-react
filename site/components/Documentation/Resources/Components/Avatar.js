import React, { Component } from 'react';
import { Avatar, Candytar, Grid, GridCell } from '@brandwatch/axiom-components';
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
            <GridCell><Candytar size="3rem" /></GridCell>
            <GridCell><Candytar size="3rem" /></GridCell>
            <GridCell><Avatar size="3rem" src="/assets/avatar.png" /></GridCell>
            <GridCell><Candytar size="3rem" /></GridCell>
            <GridCell><Candytar size="3rem" /></GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Avatar/Avatar'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Avatar/Candytar'),
        ] } />
      </DocumentationContent>
    );
  }
}
