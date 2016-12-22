import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Label, LabelIcon, LabelGroup } from 'bw-axiom';

export default class LabelExample extends Component {
  render() {
    return (
      <Example name="Label actions with icons">
        <Snippet>
          <LabelGroup>
            <Label>
              A Label

              <LabelIcon name="cross" onClick={ () => window.alert('Delete!') } />
            </Label>
          </LabelGroup>
        </Snippet>
      </Example>
    );
  }
}
