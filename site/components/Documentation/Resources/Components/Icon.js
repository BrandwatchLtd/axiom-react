import React, { Component } from 'react';
import chunk from 'lodash.chunk';
import { Animicon, Grid, GridCell, Icon, IconButton } from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    const iconProps = require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Icon/Icon');

    return (
      <DocumentationContent>
        { chunk(iconProps.props.name.values, 4).map((chunk, index) => (
          <Grid key={ index } responsive={ false }>
            { chunk.map((name) => (
              <GridCell key={ name } width={ 25 }>
                <Grid gutters="tiny" none responsive={ false } verticalAlign="middle">
                  <GridCell>
                    <Icon name={ name } />
                  </GridCell>

                  <GridCell>
                    { name }
                  </GridCell>
                </Grid>
              </GridCell>
            )) }
          </Grid>
        )) }

        <DocumentationShowCase centered>
          <Grid gutters="tiny" responsive={ false } verticalAlign="middle">
            <GridCell><Icon name="star" size="2rem" /></GridCell>
            <GridCell><Icon name="star" size="3rem" /></GridCell>
            <GridCell><Icon name="star" size="4rem" /></GridCell>
            <GridCell><Icon name="star" size="5rem" /></GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          iconProps,
        ] } />

        <DocumentationShowCase centered>
          <Grid gutters="tiny" responsive={ false } verticalAlign="middle">
            <GridCell><Animicon isIn name="tick" size="3rem" /></GridCell>
            <GridCell><Animicon isIn name="cross" size="3rem" /></GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Icon/Animicon'),
        ] } />

        <DocumentationShowCase centered>
          <IconButton name="ellipsis" />
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Icon/IconButton'),
        ] } />
      </DocumentationContent>
    );
  }
}
