import React, { Component, PropTypes } from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Icon from '../../icon/Icon';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

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
