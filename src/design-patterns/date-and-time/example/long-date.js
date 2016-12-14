import React, { Component } from 'react';
import { CodeSnippet, Example } from 'style-guide';
import Paragraph from '../../../components/typography/Paragraph';
import Strong from '../../../components/typography/Strong';
import { longDate, longDateWithTime, longDateWithTimezone } from '../date-and-time';

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
