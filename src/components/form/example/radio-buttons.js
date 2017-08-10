import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { RadioButtonGroup, RadioButton } from 'bw-axiom';

export default class RadioButtonExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      RadioButton: PropTypes.object.isRequired,
      RadioButtonGroup: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      RadioButton: components.RadioButton,
      RadioButtonGroup: components.RadioButtonGroup,
    };

    const initialProps = {
      RadioButton: {
        name: 'lorem',
        children: 'Lorem ipsum',
      },
      RadioButtonGroup: {},
    };

    const initialPropOptions = {
      RadioButtonGroup: {
        children: {
          count: 3,
          min: 1,
          max: Infinity,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <RadioButtonGroup { ...initialProps.RadioButtonGroup }>
          <RadioButton { ...initialProps.RadioButton } />
        </RadioButtonGroup>
      </ExampleConfig>
    );
  }
}
