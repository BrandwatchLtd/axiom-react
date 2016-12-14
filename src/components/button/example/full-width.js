import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { ButtonGroup, Button } from 'bw-axiom';

export default class ButtonExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Button: PropTypes.shape({
        full: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Button: { full } } = components;

    return (
      <Example name="Full width buttons">
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            <Button full={ true }>Always full width</Button>

            { full.values.map((at) =>
              <Button full={ at } key={ at }>Full width at { at }</Button>
            ) }
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
