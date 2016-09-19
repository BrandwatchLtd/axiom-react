import React from 'react';
import Paragraph from '../../../components/typography/Paragraph';
import Strong from '../../../components/typography/Strong';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';
import { longDate, longDateWithTime, longDateWithTimezone } from '../date-and-time';

export default [
  <Paragraph key="1">
    <Strong>Without time:</Strong> { longDate(new Date) }<br />
    <Strong>With time:</Strong> { longDateWithTime(new Date) }<br />
    <Strong>With timezone:</Strong> { longDateWithTimezone(new Date) }
  </Paragraph>,

  <CodeSnippet key="2" language="js">{
`longDate(new Date);
longDateWithTime(new Date);
longDateWithTimezone(new Date);`
  }</CodeSnippet>,
];
