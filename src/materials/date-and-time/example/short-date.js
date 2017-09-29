import React, { Component } from 'react';
import { CodeSnippet, Example } from 'style-guide';
import Paragraph from '../../../components/typography/Paragraph';
import Strong from '../../../components/typography/Strong';
import shortDate from '../shortDate';
import shortDateWithTime from '../shortDateWithTime';

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
