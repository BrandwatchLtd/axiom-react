import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, Stat } from 'bw-axiom';
import { randomStatNumber } from './utils';

export default class StatCardsExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Stat: PropTypes.shape({
        color: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Stat: { color } } = components;

    return (
      <Example name="Stat Colors">
        <Snippet>
          <Grid
              gutters="small"
              shrink={ true }
              snippetIgnore={ true }>
            { color.values.map((color) =>
              <GridCell
                  key={ color }
                  snippetIgnore={ true } >
                <Stat color={ color }>
                  { randomStatNumber() }
                </Stat>
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
