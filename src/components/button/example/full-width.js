import React, { Component, PropTypes } from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

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
