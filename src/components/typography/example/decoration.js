import React from 'react';
import Paragraph from '../Paragraph';
import Italic from '../Italic';
import Underline from '../Underline';
import Strike from '../Strike';

export default [
  <Paragraph><Italic>This text is italicised</Italic></Paragraph>,
  <Paragraph><Underline>This text is underlined</Underline></Paragraph>,
  <Paragraph><Strike>This text is strike through</Strike></Paragraph>,
];
