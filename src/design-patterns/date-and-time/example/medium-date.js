import React, { Component } from 'react';
import Paragraph from '../../../components/typography/Paragraph';
import Strong from '../../../components/typography/Strong';
import { mediumDate, mediumDateWithTime } from '../date-and-time';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';
import Example from 'style-guide/components/Example/Example';

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
