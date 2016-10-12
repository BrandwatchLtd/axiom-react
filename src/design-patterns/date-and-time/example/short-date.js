import React, { Component } from 'react';
import Paragraph from '../../../components/typography/Paragraph';
import Strong from '../../../components/typography/Strong';
import { shortDate, shortDateWithTime } from '../date-and-time';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';
import Example from 'style-guide/components/Example/Example';

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
