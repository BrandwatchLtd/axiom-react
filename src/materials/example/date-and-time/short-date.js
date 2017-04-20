import React, { Component } from 'react';
import { CodeSnippet, Example } from 'style-guide';
import { Paragraph, Strong, shortDate, shortDateWithTime } from 'bw-axiom';

export default class DateExample extends Component {
  render() {
    return (
      <Example name="Short date">
        <Paragraph>
          <Strong>Without time:</Strong> { shortDate(new Date) }<br />
          <Strong>With time:</Strong> { shortDateWithTime(new Date) }<br />
        </Paragraph>

        <CodeSnippet language="js">{
`shortDate(new Date);
shortDateWithTime(new Date);`
          }</CodeSnippet>
      </Example>
    );
  }
}
