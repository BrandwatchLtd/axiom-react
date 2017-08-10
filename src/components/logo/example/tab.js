import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { LogoTab } from 'bw-axiom';

export default class LogoTabExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      LogoTab: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      LogoTab: components.LogoTab,
    };

    const initialProps = {
      LogoTab: {
        height: '7rem',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <LogoTab { ...initialProps.LogoTab } />
      </ExampleConfig>
    );
  }
}
