import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import DataPoint from '../DataPoint';
import DataPoints from '../DataPoints';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';

class DataPointExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      DataPoints: PropTypes.object,
      DataPoint: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      DataPoints: components.DataPoints,
      DataPoint: components.DataPoint,
    };

    const initialProps = {
      DataPoints: {
        onClick: () => {},
        size: '2rem',
      },
      DataPoint: {

      },
    };

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Grid shrink snippetIgnore>
          <GridCell snippetIgnore>
            <DataPoints { ...initialProps.DataPoints }>
              <DataPoint { ...initialProps.DataPoint } color="giant-leap" />
            </DataPoints>
          </GridCell>

          <GridCell snippetIgnore>
            <DataPoints { ...initialProps.DataPoints }>
              <DataPoint { ...initialProps.DataPoint } color="giant-leap" />
              <DataPoint { ...initialProps.DataPoint } color="critical-mass" />
            </DataPoints>
          </GridCell>

          <GridCell snippetIgnore>
            <DataPoints { ...initialProps.DataPoints }>
              <DataPoint { ...initialProps.DataPoint } color="giant-leap" />
              <DataPoint { ...initialProps.DataPoint } color="critical-mass" />
              <DataPoint { ...initialProps.DataPoint } color="new-horizon" />
            </DataPoints>
          </GridCell>
        </Grid>
      </ExampleConfig>
    );
  }
}


export default [
  DataPointExample,
];
