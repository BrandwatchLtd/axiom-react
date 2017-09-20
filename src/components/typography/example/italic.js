import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Italic from '../Italic';

export default class ItalicExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Italic: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Italic: components.Italic,
    };

    const initialProps = {
      Italic: {
        textSize: 'display1',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Italic { ...initialProps.Italic }>Lorem ipsum dolor sit amet</Italic>
      </ExampleConfig>
    );
  }
}
