import React, { Component } from 'react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Link from '../Link';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Links">
        <Snippet>
          <Heading level={ 3 } snippetIgnore={ true }>
            Lorem ipsum dolor sit amet, <Link>consectetur</Link> adipiscing
            elit. Donec tempus ut felis vitae hendrerit.
          </Heading>
          <Paragraph snippetIgnore={ true }>
            Lorem ipsum dolor sit amet, <Link snippetIgnore={ true }>consectetur</Link> adipiscing
            elit. Donec tempus ut felis vitae hendrerit.
          </Paragraph>
        </Snippet>

        <Heading level={ 5 }>Disabled links</Heading>
        <Snippet>
          <Paragraph snippetIgnore={ true }>
            Lorem ipsum dolor sit amet, <Link disabled={ true }>consectetur</Link> adipiscing
            elit. Donec tempus ut felis vitae hendrerit.
          </Paragraph>
        </Snippet>
      </Example>
    );
  }
}
