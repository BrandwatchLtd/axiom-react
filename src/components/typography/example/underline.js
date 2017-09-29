import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Underline from '../Underline';

export default class UnderlineExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Underline: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Underline: components.Underline,
    };

    const initialProps = {
      Underline: {
        textSize: 'display1',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Underline { ...initialProps.Underline }>Lorem ipsum dolor sit amet</Underline>
      </ExampleConfig>
    );
  }
}
