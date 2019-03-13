import React, { Component } from 'react';
import chunk from 'lodash.chunk';
import { flags } from '@brandwatch/axiom-materials';
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
        { chunk(Object.keys(flags), 5).map((chunk, index) => (
          <Grid key={ index } responsive={ false }>
            { chunk.map((key) => (
              <GridCell key={ key } width={ 100 / 5 }>
                <Grid gutters="tiny" none responsive={ false } verticalAlign="middle">
                  <GridCell>
                    <Flag alpha2={ key } size="4rem" />
                  </GridCell>
                  <GridCell>
                    { key }
                  </GridCell>
                </Grid>
              </GridCell>
            )) }
          </Grid>
        )) }

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
