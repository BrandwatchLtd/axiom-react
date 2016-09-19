import React from 'react';
import ShortNumber from './ShortNumber';
import LongNumber from './LongNumber';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export const title = 'Numbers';
export const id = 'numbers';

export const examples = [{
  name: 'Short Number',
  children: [
    <ShortNumber key="example" />,
    <CodeSnippet key="snippet" language="js">shortNumber(Number [, Number]);</CodeSnippet>,
  ],
}, {
  name: 'Long Number',
  children: [
    <LongNumber key="example" />,
    <CodeSnippet key="snippet" language="js">LongNumber(Number [, Number]);</CodeSnippet>,
  ],
}];
