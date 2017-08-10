import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { LogoHorizontal } from 'bw-axiom';

export default class LogoHorizontalExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      LogoHorizontal: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      LogoHorizontal: components.LogoHorizontal,
    };

    const initialProps = {
      LogoHorizontal: {
        width: '12rem',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <LogoHorizontal { ...initialProps.LogoHorizontal } />
      </ExampleConfig>
    );
  }
}
