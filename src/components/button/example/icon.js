import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Icon from '../../icon/Icon';

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
                <Icon name="twitter" />
              </Button>
            ) }
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}
