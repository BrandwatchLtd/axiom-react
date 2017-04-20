import React, { Component } from 'react';
import { CodeSnippet, Example } from 'style-guide';
import { Paragraph, Strong, longDate, longDateWithTime, longDateWithTimezone } from 'bw-axiom';

export default class DateExample extends Component {
  render() {
    return (
      <Example name="Long date">
        <Paragraph>
          <Strong>Without time:</Strong> { longDate(new Date) }<br />
          <Strong>With time:</Strong> { longDateWithTime(new Date) }<br />
          <Strong>With timezone:</Strong> { longDateWithTimezone(new Date) }
        </Paragraph>

        <CodeSnippet language="js">{
`longDate(new Date);
longDateWithTime(new Date);
longDateWithTimezone(new Date);`
          }</CodeSnippet>
      </Example>
    );
  }
}
