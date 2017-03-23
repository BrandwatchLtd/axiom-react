import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { TextInput } from 'bw-axiom';

export default class FormExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      TextInput: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { TextInput: { size } } = components;

    return (
      <Example name="Text input sizes">
        <Snippet>
          { size.values.map((size) =>
            <TextInput
                key={ size }
                label={ `${size} text input` }
                placeholder={ `${size} text input` }
                size={ size } />
          ) }
        </Snippet>
      </Example>
    );
  }
}
