import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Label, LabelGroup, Paragraph } from 'bw-axiom';

export default class LabelExample extends Component {
  render() {
    return (
      <Example name="Label group">
        <Paragraph>
          LabelGroups keep a consistent flow of spacing between Labels and
          sibling elements, so liek other inline elements they should always be
          used, even when there is only one Label.
        </Paragraph>

        <Snippet>
          <LabelGroup>
            <Label>A Label</Label>
            <Label>A Label</Label>
            <Label>A Label</Label>
          </LabelGroup>
        </Snippet>
      </Example>
    );
  }
}
