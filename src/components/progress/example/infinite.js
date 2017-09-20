import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import ProgressInfinite from '../ProgressInfinite';

export default class ProgressInfiniteExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      ProgressInfinite: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      ProgressInfinite: components.ProgressInfinite,
    };

    const initialProps = {
      ProgressInfinite: { },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <ProgressInfinite { ...initialProps.ProgressInfinite } />
      </ExampleConfig>
    );
  }
}
