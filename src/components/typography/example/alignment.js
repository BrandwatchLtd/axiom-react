import React, { Component } from 'react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import { breakpointIds } from '../../../design-patterns/layout/_vars';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Alignment">
        <Snippet>
          <Paragraph textLeft={ true }>This text is left aligned</Paragraph>
          <Paragraph textCenter={ true }>This text is center aligned</Paragraph>
          <Paragraph textRight={ true }>This text is right aligned</Paragraph>
        </Snippet>

        <Heading>Responsive</Heading>
        <Snippet>
          { breakpointIds.map((id) => [
            <Paragraph textLeft={ id } textRight={ true }>
              This text is left aligned at { id.toUpperCase() }
            </Paragraph>,
            <Paragraph textCenter={ id }>
              This text is center aligned at { id.toUpperCase() }
            </Paragraph>,
            <Paragraph textRight={ id }>
              This text is right aligned at { id.toUpperCase() }
            </Paragraph>,
          ]) }
        </Snippet>
      </Example>
    );
  }
}
