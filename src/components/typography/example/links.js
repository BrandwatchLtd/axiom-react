import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Alert, Paragraph, Link } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Links">
        <Snippet>
          <Paragraph snippetIgnore={ true }>
            <Link style="inherit">Inherit link style</Link>
          </Paragraph>
          <Paragraph snippetIgnore={ true }>
            <Link style="normal">Normal link style</Link>
          </Paragraph>
          <Paragraph snippetIgnore={ true }>
            <Link style="subtle">Subtle link style</Link>
          </Paragraph>
          <Alert snippetIgnore={ true }>
            <Paragraph snippetIgnore={ true }>
              <Link style="light">Light link style (used on colored backgrounds)</Link>
            </Paragraph>
          </Alert>
        </Snippet>
      </Example>
    );
  }
}
