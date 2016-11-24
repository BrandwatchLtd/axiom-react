import React, { Component, PropTypes } from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

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
                Button ({ size.toUpperCase() })
              </Button>
            ) }
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
