import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Heading from '../Heading';
import Text from '../Text';

export default class TextExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Text: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Text: components.Text,
    };

    const initialProps = {
      Text: {
        textSize: 'headline',
        textStrong: true,
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Heading textSize="display2" textUnderline>
          Display2 / <Text { ...initialProps.Text }>headline</Text>
        </Heading>
      </ExampleConfig>
    );
  }
}
