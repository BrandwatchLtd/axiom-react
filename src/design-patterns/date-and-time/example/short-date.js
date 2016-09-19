import React from 'react';
import Paragraph from '../../../components/typography/Paragraph';
import Strong from '../../../components/typography/Strong';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';
import { shortDate, shortDateWithTime } from '../date-and-time';

export default [
  <Paragraph key="1">
    <Strong>Without time:</Strong> { shortDate(new Date) }<br />
    <Strong>With time:</Strong> { shortDateWithTime(new Date) }
  </Paragraph>,

  <CodeSnippet key="2" language="js">{
`shortDate(new Date);
shortDateWithTime(new Date);`
  }</CodeSnippet>,
];
