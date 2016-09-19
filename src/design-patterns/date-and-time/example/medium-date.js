import React from 'react';
import Paragraph from '../../../components/typography/Paragraph';
import Strong from '../../../components/typography/Strong';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';
import { mediumDate, mediumDateWithTime } from '../date-and-time';

export default [
  <Paragraph key="1">
    <Strong>Without time:</Strong> { mediumDate(new Date) }<br />
    <Strong>With time:</Strong> { mediumDateWithTime(new Date) }
  </Paragraph>,

  <CodeSnippet key="2" language="js">{
`mediumDate(new Date);
mediumDateWithTime(new Date);`
  }</CodeSnippet>,
];
