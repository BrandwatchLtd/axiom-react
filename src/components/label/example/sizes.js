import React, { Component, PropTypes } from 'react';
import LabelGroup from '../LabelGroup';
import Label from '../Label';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class LabelExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Label: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Label: { size } } = components;

    return (
      <Example name="Label sizes">
        <Snippet>
          <LabelGroup snippetIgnore={ true }>
            { size.values.map((size) =>
              <Label key={ size } size={ size }>
                Label ({ size.toUpperCase() })
              </Label>
            ) }
          </LabelGroup>
        </Snippet>
      </Example>
    );
  }
}
