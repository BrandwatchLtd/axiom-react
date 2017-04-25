import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ButtonGroup, Button } from 'bw-axiom';

export default class ButtonExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Button: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Button: { size } } = components;

    return (
      <Example name="Button sizes">
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            { size.values.map((size) =>
              <Button key={ size } size={ size }>
                Button - { size.toUpperCase() }
              </Button>
            ) }
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
