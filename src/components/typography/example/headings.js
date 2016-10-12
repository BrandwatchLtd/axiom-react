import React, { Component } from 'react';
import Heading from '../Heading';
import Strong from '../Strong';
import Weak from '../Weak';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Headings">
        <Snippet>
          { Heading.__ax_propTypes.level.oneOf.map((level, index) =>
            <Heading key={ index } level={ level }>
              h{ level }.
              <Weak> Weak </Weak>
              Standard
              <Strong> Strong </Strong>
            </Heading>
          ) }
        </Snippet>
      </Example>
    );
  }
}
