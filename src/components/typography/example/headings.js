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
          { Heading.__ax_propTypes.style.oneOf.map((style, index) =>
            <Heading key={ index } style={ style }>
              { style }: [
              <Weak> Weak </Weak>/
              Standard/
              <Strong> Strong </Strong>
              ]
            </Heading>
          ) }
        </Snippet>
      </Example>
    );
  }
}
