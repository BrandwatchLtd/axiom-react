import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DemoBox, Example, Snippet } from 'style-guide';
import { Grid, GridCell } from 'bw-axiom';

export default class GridExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Grid: PropTypes.shape({
        gutters: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }

  render() {
    return (
      <Example name="Wrapping">
        <Snippet>
          <Grid wrap={ true }>
            <GridCell full={ true } snippetReplace={ true }>
              <DemoBox>Wrap</DemoBox>
            </GridCell>

            <GridCell full={ true } snippetReplace={ true }>
              <DemoBox>Wrap</DemoBox>
            </GridCell>
          </Grid>

          <Grid wrap={ false }>
            <GridCell full={ true } snippetReplace={ true }>
              <DemoBox>No wrap</DemoBox>
            </GridCell>

            <GridCell full={ true } snippetReplace={ true }>
              <DemoBox>No wrap</DemoBox>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
