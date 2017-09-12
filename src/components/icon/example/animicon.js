import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { Animicon } from 'bw-axiom';

export default class AnimiconExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Animicon: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Animicon: components.Animicon,
    };

    const initialProps = {
      Animicon: {
        isIn: true,
        name: 'tick',
        size: '4rem',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Animicon { ...initialProps.Animicon } />
      </ExampleConfig>
    );
  }
}
