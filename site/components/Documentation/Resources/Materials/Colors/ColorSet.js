import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, GridCell, Heading } from '@brandwatch/axiom-components';

export default class ColorSet extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string,
  };

  render() {
    const { children, name, ...rest } = this.props;

    return (
      <GridCell { ...rest }>
        { name && <Heading space="x3">{ name }</Heading> }
        <Grid gutters="tiny" none responsive={ false }>
          { children }
        </Grid>
      </GridCell>
    );
  }
}
