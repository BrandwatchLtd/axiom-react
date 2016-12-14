import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { ButtonGroup, Button, Icon } from 'bw-axiom';

export default class ButtonExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Button: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
        style: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Button: { size, style } } = components;

    return (
      <Example name="Circular buttons">
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            { style.values.map((style) =>
              size.values.map((size) =>
                <Button circular={ true } key={ `${style}${size}` } size={ size } style={ style }>
                  <Icon name="ellipsis" snippetReplace={ true } />
                </Button>
              )
            ) }
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
