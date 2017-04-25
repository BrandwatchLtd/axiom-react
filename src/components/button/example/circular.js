import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ButtonGroup, Button } from 'bw-axiom';

export default class ButtonExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Button: PropTypes.shape({
        circular: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Button: { circular } } = components;

    return (
      <Example name="Circular Buttons">
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            { circular.values.map((size) =>
              <Button
                  circular={ size }
                  key={ size }
                  style="primary">1</Button>
            ) }

            { circular.values.map((size) =>
              <Button
                  circular={ size }
                  key={ size }
                  snippetSkip={ true }
                  style="secondary">1</Button>
            ) }
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
