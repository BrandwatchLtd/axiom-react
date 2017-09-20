import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Heading from '../Heading';
import Strong from '../Strong';

export default class HeadingExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Heading: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Heading: components.Heading,
    };

    const initialProps = {
      Heading: {
        textSize: 'display2',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Heading { ...initialProps.Heading }>
          Lorem ipsum <Strong>dolor sit amet</Strong>
        </Heading>
      </ExampleConfig>
    );
  }
}
