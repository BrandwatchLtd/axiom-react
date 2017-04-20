import React, { Component } from 'react';
import { CodeSnippet, Example } from 'style-guide';
import { Paragraph, Strong, mediumDate, mediumDateWithTime } from 'bw-axiom';

export default class DateExample extends Component {
  render() {
    return (
      <Example name="Medium date">
        <Paragraph>
          <Strong>Without time:</Strong> { mediumDate(new Date) }<br />
          <Strong>With time:</Strong> { mediumDateWithTime(new Date) }<br />
        </Paragraph>

        <CodeSnippet language="js">{
`mediumDate(new Date);
mediumDateWithTime(new Date);`
          }</CodeSnippet>
      </Example>
    );
  }
}
