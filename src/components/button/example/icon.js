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
          <ButtonGroup snippetIgnore={ true }>
            { size.values.map((size) =>
              <Button key={ size } size={ size }>
                Button ({ size.toUpperCase() })
                <ButtonIcon name="twitter" />
              </Button>
            ) }
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
