import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Link from '../Link';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Links">
        <Snippet>
          <Heading snippetIgnore={ true } style="headline">
            Lorem ipsum dolor sit amet, <Link>consectetur</Link> adipiscing
            elit. Donec tempus ut felis vitae hendrerit.
          </Heading>
          <Paragraph snippetIgnore={ true }>
            Lorem ipsum dolor sit amet, <Link snippetIgnore={ true }>consectetur</Link> adipiscing
            elit. Donec tempus ut felis vitae hendrerit.
          </Paragraph>
        </Snippet>

        <Heading>Disabled links</Heading>
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
