import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, GridCell, Toggle } from 'bw-axiom';

export default class TypeBool extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    value: PropTypes.bool,
  };

  static defaultProps = {
    value: false,
  };

  render() {
    const { value, setValue } = this.props;

    return (
      <Grid
          gutters="tiny"
          horizontalAlign="end"
          responsive={ false }
          shrink={ true }
          verticalAlign="middle">
        <GridCell>{ value.toString() }</GridCell>
        <GridCell>
          <Toggle
              onToggle={ () => setValue(!value) }
              toggled={ value } />
        </GridCell>
      </Grid>
    );
  }
}
