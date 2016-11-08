import React, { Component } from 'react';
import LabelGroup from '../LabelGroup';
import Label from '../Label';
import Heading from '../../typography/Heading';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class LabelExample extends Component {
  render() {
    return (
      <Example name="Colored Labels">
        <Heading>Plaette Colors</Heading>
        <Snippet>
          <LabelGroup snippetIgnore={ true }>
            { Label.__ax_propTypes.color.oneOf.map((id, index) =>
              <Label color={ id } key={ index }>{ id }</Label>
            ) }
          </LabelGroup>
        </Snippet>
      </Example>
    );
  }
}
