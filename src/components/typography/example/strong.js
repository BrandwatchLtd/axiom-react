import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { Strong } from 'bw-axiom';

export default class StrongExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Strong: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Strong: components.Strong,
    };

    const initialProps = {
      Strong: {
        textSize: 'display1',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Strong { ...initialProps.Strong }>Lorem ipsum dolor sit amet</Strong>
      </ExampleConfig>
    );
  }
}
