import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { Strike } from 'bw-axiom';

export default class StrikeExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Strike: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Strike: components.Strike,
    };

    const initialProps = {
      Strike: {
        textSize: 'display1',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Strike { ...initialProps.Strike }>Lorem ipsum dolor sit amet</Strike>
      </ExampleConfig>
    );
  }
}
