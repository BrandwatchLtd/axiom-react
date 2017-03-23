import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { Alert, TextInput } from 'bw-axiom';

export default class FormExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      TextInput: PropTypes.shape({
        theme: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { TextInput: { theme } } = components;

    return (
      <Example name="Text input themes">
        <Snippet>
          { theme.values.map((theme) =>
            <Alert key={ theme } space="small">
              <TextInput
                  placeholder={ `${theme} theme input` }
                  theme={ theme } />
            </Alert>
          ) }
        </Snippet>
      </Example>
    );
  }
}
