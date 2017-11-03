import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import ProgressButton from '../ProgressButton';

export default class ProgressButtonExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      ProgressButton: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      ProgressButton: components.ProgressButton,
    };

    const initialProps = {
      ProgressButton: { },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <ProgressButton { ...initialProps.ProgressButton }>
          Submit me please!
        </ProgressButton>
      </ExampleConfig>
    );
  }
}
