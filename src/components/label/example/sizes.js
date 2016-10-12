import React, { Component } from 'react';
import LabelGroup from '../LabelGroup';
import Label from '../Label';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class LabelExample extends Component {
  render() {
    return (
      <Example name="Label sizes">
        <Snippet>
          <LabelGroup snippetIgnore={ true }>
            { Label.__ax_propTypes.size.oneOf.map((size, index) =>
              <Label key={ index } size={ size }>
                Label ({ size.toUpperCase() })
              </Label>
            ) }
          </LabelGroup>
        </Snippet>
      </Example>
    );
  }
}
