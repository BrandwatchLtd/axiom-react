import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { ButtonGroup, Button } from 'bw-axiom';

export default class ButtonExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Button: PropTypes.shape({
        style: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Button: { style } } = components;

    return (
      <Example name="Styles">
        { style.values.map((style) =>
          <Snippet key={ style }>
            <ButtonGroup snippetIgnore={ true }>
              <Button style={ style }>
                { style } action button
              </Button>

              <Button disabled={ true } style={ style } >
                Disabled { style } action button
              </Button>
            </ButtonGroup>
          </Snippet>
        ) }
      </Example>
    );
  }
}
