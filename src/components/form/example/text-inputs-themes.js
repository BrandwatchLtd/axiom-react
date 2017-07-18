import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Alert, TextInput } from 'bw-axiom';

export default class FormExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      TextInput: PropTypes.shape({
        style: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { TextInput: { style } } = components;

    return (
      <Example name="Text input styles">
        <Snippet>
          { style.values.map((style) =>
            <Alert key={ style } space="x4">
              <TextInput
                  placeholder={ `${style} style input` }
                  style={ style } />
            </Alert>
          ) }
        </Snippet>
      </Example>
    );
  }
}
