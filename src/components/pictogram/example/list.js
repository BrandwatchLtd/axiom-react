import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example } from 'style-guide';
import { Grid, GridCell, Pictogram, Paragraph } from 'bw-axiom';

export default class PictogramExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Pictogram: PropTypes.shape({
        name: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render () {
    const { components } = this.props;
    const { Pictogram: { name } } = components;

    return (
      <Example name="Pictograms">
        <Grid>
          { name.values.map((name) =>
            <GridCell key={ name } width={ 25 }>
              <Grid gutters="small" responsive={ false } verticalAlign="middle">
                <GridCell shrink={ true }>
                  <Pictogram name={ name } />
                </GridCell>

                <GridCell>
                  <Paragraph textEllipsis={ true }>{ name }</Paragraph>
                </GridCell>
              </Grid>
            </GridCell>
          ) }
        </Grid>
      </Example>
    );
  }
}
