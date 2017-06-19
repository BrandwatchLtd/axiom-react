import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Alert, Grid, GridCell, IconIndicator } from 'bw-axiom';
import { ExampleConfig } from 'style-guide';

class AlertExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Alert: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Alert: components.Alert,
    };

    const initialProps = {
      Alert: {
        onRemoveClick: () => {},
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Alert { ...initialProps.Alert }>
          <Grid gutters="small" snippetReplace={ true } verticalAlign="middle">
            <GridCell shrink={ true }>
              <IconIndicator color="subtle" name="warning" />
            </GridCell>

            <GridCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
              accumsan quam, ut ullamcorper nulla.
            </GridCell>
          </Grid>
        </Alert>
      </ExampleConfig>
    );
  }
}


module.exports = [
  AlertExample,
];
