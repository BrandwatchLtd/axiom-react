import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { LogoBox } from 'bw-axiom';

export default class LogoBoxExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      LogoBox: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      LogoBox: components.LogoBox,
    };

    const initialProps = {
      LogoBox: {
        height: '7rem',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <LogoBox { ...initialProps.LogoBox } />
      </ExampleConfig>
    );
  }
}
