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
              <DataPoint { ...initialProps.DataPoint } color="blue" />
            </DataPoints>
          </GridCell>

          <GridCell snippetIgnore>
            <DataPoints { ...initialProps.DataPoints }>
              <DataPoint { ...initialProps.DataPoint } color="blue" />
              <DataPoint { ...initialProps.DataPoint } color="pink" />
            </DataPoints>
          </GridCell>

          <GridCell snippetIgnore>
            <DataPoints { ...initialProps.DataPoints }>
              <DataPoint { ...initialProps.DataPoint } color="blue" />
              <DataPoint { ...initialProps.DataPoint } color="pink" />
              <DataPoint { ...initialProps.DataPoint } color="amber" />
            </DataPoints>
          </GridCell>
        </Grid>
      </ExampleConfig>
    );
  }
}


module.exports = [
  DataPointExample,
];
