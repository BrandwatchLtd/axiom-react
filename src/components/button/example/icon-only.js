import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
      <Example name="Buttons with ButtonIcon only">

        { size.values.map((size) =>
          <ButtonGroup joined={ true } key={ `primary-${size}` }>
            <Button size={ size } style="primary">
              Button { size.toUpperCase() }
            </Button>

            <Button size={ size } style="primary">
              <ButtonIcon name="chevron-down" />
            </Button>
          </ButtonGroup>
        ) }

        { size.values.map((size) =>
          <ButtonGroup joined={ true } key={ `seconary-${size}` }>
            <Button size={ size } style="secondary">
              Button { size.toUpperCase() }
            </Button>

            <Button size={ size } style="secondary">
              <ButtonIcon name="chevron-down" />
            </Button>
          </ButtonGroup>
        ) }

        <Snippet renderSkip={ true }>
          <ButtonGroup joined={ true }>
            <Button>...</Button>
            <Button>
              <ButtonIcon name="chevron-down" />
            </Button>
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
