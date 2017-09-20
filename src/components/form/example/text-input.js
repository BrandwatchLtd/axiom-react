import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import TextInput from '../TextInput';
import TextInputIcon from '../TextInputIcon';

export default class TextInputExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      TextInput: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      TextInput: components.TextInput,
      TextInputIcon: components.TextInputIcon,
    };

    const initialProps = {
      TextInput: {
        label: 'Lorem ipsum',
        placeholder: 'Write in me',
      },
      TextInputIcon: {
        align: 'right',
        onClick: () => {},
        name: 'magnify-glass',
      },
    };

    const initialPropOptions = {
      TextInput: {
        children: {
          options: [{
            name: 'Nothing',
            children: null,
          }, {
            name: 'With TextInputIcon',
            children: (
              <TextInputIcon { ...initialProps.TextInputIcon } />
            ),
          }],
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <TextInput { ...initialProps.TextInput }>
          { initialPropOptions.TextInput.children.options[0].children }
        </TextInput>
      </ExampleConfig>
    );
  }
}
