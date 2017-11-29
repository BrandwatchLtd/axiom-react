import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Form from '../Form';
import TextInput from '../TextInput';
import TextInputIcon from '../TextInputIcon';
import TextInputButton from '../TextInputButton';

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
      TextInputButton: components.TextInputButton,
    };

    const initialProps = {
      TextInput: {
        label: 'Lorem ipsum',
        placeholder: 'Write in me',
        size: 'medium',
      },
      TextInputIcon: {
        align: 'right',
        onClick: () => {},
        name: 'magnify-glass',
      },
      TextInputButton: {
        onClick: () => {},
        style: 'secondary',
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
          }, {
            name: 'With TextInputButton',
            children: (
              <TextInputButton
                  { ...initialProps.TextInputButton }
                  style={ initialProps.TextInputButton.style }>
                Test
              </TextInputButton>
            ),
          }, {
            name: 'With TextInputIcon + TextInputButton',
            children: [
              <TextInputIcon { ...initialProps.TextInputIcon } key="icon" />,
              <TextInputButton
                  { ...initialProps.TextInputButton }
                  key="button">
                Test
              </TextInputButton>,

            ],
          }],
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Form onSubmit={ (e) => e.preventDefault() }>
          <TextInput { ...initialProps.TextInput }>
            { initialPropOptions.TextInput.children.options[0].children }
          </TextInput>
        </Form>
      </ExampleConfig>
    );
  }
}
