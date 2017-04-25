import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ButtonGroup, Button } from 'bw-axiom';

export default class ButtonExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Button: PropTypes.shape({
        stadium: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Button: { stadium } } = components;

    return (
      <Example name="Stadium Buttons">
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            { stadium.values.map((size) =>
              <Button
                  key={ size }
                  stadium={ size }
                  style="primary">100</Button>
            ) }

            { stadium.values.map((size) =>
              <Button
                  key={ size }
                  snippetSkip={ true }
                  stadium={ size }
                  style="secondary">100</Button>
            ) }
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
