import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Grid from '../Grid';
import GridCell from '../GridCell';
import GridBlock from './GridBlock';

class GridExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Grid: PropTypes.object.isRequired,
      GridCell: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Grid: components.Grid,
      GridCell: components.GridCell,
    };

    const initialProps = {
      Grid: {},
      GridCell: {},
    };

    const initialPropOptions = {
      Grid: {
        children: {
          count: 1,
          max: 3,
          min: 1,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Grid { ...initialProps.Grid }>
          <GridCell { ...initialProps.GridCell } data-axiom="GridExample">
            <GridBlock>
              Lorem ipsum dolor sit amet.</GridBlock>
          </GridCell>

          <GridCell { ...initialProps.GridCell } data-axiom="GridExample">
            <GridBlock>
              Lorem ipsum dolor sit amet.</GridBlock>
          </GridCell>

          <GridCell { ...initialProps.GridCell } data-axiom="GridExample">
            <GridBlock>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              finibus quam felis, in interdum felis cursus non. Aenean at urna
              aliquet, fermentum justo sit amet, egestas nulla.</GridBlock>
          </GridCell>
        </Grid>
      </ExampleConfig>
    );
  }
}

export default [ GridExample ];
