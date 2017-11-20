import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import HorizontalRule from '../HorizontalRule';

export class HorizontalRuleExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      HorizontalRule: PropTypes.object,
    }).isRequired,
  };


  render() {
    const { components } = this.props;
    const propTypes = {
      HorizontalRule: components.HorizontalRule,
    };

    return (
      <ExampleConfig propTypes={ propTypes }>
        <HorizontalRule />
      </ExampleConfig>
    );
  }
}

export default [ HorizontalRuleExample ];
