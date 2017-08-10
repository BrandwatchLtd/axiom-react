import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { ProgressFinite } from 'bw-axiom';

export default class ProgressFiniteExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      ProgressFinite: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      ProgressFinite: components.ProgressFinite,
    };

    const initialProps = {
      ProgressFinite: { },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <ProgressFinite { ...initialProps.ProgressFinite } />
      </ExampleConfig>
    );
  }
}
