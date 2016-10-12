import React, { Component } from 'react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import { colorPalette, colorAliases } from '../../../design-patterns/colors/_vars';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Colors">
        <Heading level={ 5 }>Palette Colors</Heading>
        <Snippet>
          { colorPalette.map((colors) =>
            colors.map(({ name }) =>
              <Paragraph textColor={ name }>{ name }</Paragraph>
            )
          ) }
        </Snippet>

        <Heading level={ 5 }>Context Colors</Heading>
        <Snippet>
          { colorAliases.map(({ heading, colors }) => [
            <Heading level={ 5 } snippetIgnore={ true }>{ heading }</Heading>,
            colors.map((group) =>
              group.map(({ name }) =>
                <Paragraph textColor={ name }>{ name }</Paragraph>
              )
            ),
          ]) }
        </Snippet>

        <Heading level={ 5 }>Primary Colors</Heading>
        <Snippet>
          <Paragraph textColor="primary">Primary</Paragraph>
        </Snippet>
      </Example>
    );
  }
}
