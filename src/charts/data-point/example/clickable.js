import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { DataPoint, DataPoints, Grid, GridCell } from 'bw-axiom';

export default class DataPointExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      DataPoint: PropTypes.shape({
        color: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components: { DataPoint: { color } } } = this.props;

    return (
      <Example name="Clickable DataPoint">
        <Snippet>
          <Grid gutters="tiny" responsive={ false } snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <DataPoints onClick={ () => {} } size="1.5rem">
                <DataPoint color="blue" />
                <DataPoint color="pink" />
                <DataPoint color="amber" />
              </DataPoints>
            </GridCell>

            { color.values.map((color, i) => (
              <GridCell key={ color } shrink={ true } snippetIgnore={ true }>
                <DataPoints
                    onClick={ () => {} }
                    size="1.5rem"
                    snippetIgnore={ i > 2 }>
                  <DataPoint color={ color } snippetIgnore={ i > 2 } />
                </DataPoints>
              </GridCell>
            )) }

          </Grid>
        </Snippet>
      </Example>
    );
  }
}
