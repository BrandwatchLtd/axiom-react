import React, { Component } from 'react';
import { CodeSnippet, Example } from 'style-guide';
import Paragraph from '../../../components/typography/Paragraph';
import filenameDate from '../filenameDate';

export default class FilenameDateExample extends Component {
  render() {
    return (
      <Example name="Filename date">
        <Paragraph>{ filenameDate(new Date) }</Paragraph>
        <CodeSnippet language="js">{ 'filenameDate(new Date);' }</CodeSnippet>
      </Example>
    );
  }
}
