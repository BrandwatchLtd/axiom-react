import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Form from '../Form';
import TextArea from '../TextArea';

export default class TextAreaExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      TextArea: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      TextArea: components.TextArea,
    };

    const initialProps = {
      TextArea: {
        label: 'Lorem ipsum',
        placeholder: 'Write in me',
      },
    };

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Form onSubmit={ (e) => e.preventDefault() }>
          <TextArea { ...initialProps.TextArea } />
        </Form>
      </ExampleConfig>
    );
  }
}
