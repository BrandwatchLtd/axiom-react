import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { ButtonGroup, Button, ButtonIcon } from 'bw-axiom';

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
      <Example name="Buttons with an Icon">
        <Snippet>
          { size.values.map((size) =>
            <ButtonGroup key={ size } snippetIgnore={ true }>
              <Button size={ size }>
                <ButtonIcon name="chevron-left" />
                Button { size.toUpperCase() }
              </Button>

              <Button size={ size }>
                Button { size.toUpperCase() }
                <ButtonIcon name="chevron-right" />
              </Button>
            </ButtonGroup>
          ) }
        </Snippet>
      </Example>
    );
  }
}
