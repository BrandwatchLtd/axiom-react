import React from 'react';
import Italic from '../components/typography/Italic';
import Strong from '../components/typography/Strong';
import Paragraph from '../components/typography/Paragraph';

export const title = 'About';
export const id = 'about';

export const examples = [{
  name: 'What is Axiom',
  children: [
    <Paragraph key="1">
      Axiom is a consumable library of UI & UX patterns, that can take you from a blank page to production without having to worry about styling and design details. Backed by a Style Guide Driven Development approach and a living style guide, documentation does not become a forgotten separate task and is automated at a level that still has flexibility.
    </Paragraph>,

    <Paragraph key="2">
      <Italic>
        *...boring stuff incoming...*
      </Italic>
    </Paragraph>,
  ],
}, {
  name: 'What is \'Style Guide Driven Development\'?',
  children: [
    <Paragraph key="1">
      A <Strong>style guide</Strong> communicates standards and examples for an application's visual elements and tone of voice. It is created to *encourage* consistency. A <Strong>pattern library</Strong> is a repository of exposed resources to *ensure* the consistency of the standards set in a style guide. A <Strong>living style guide</Strong> is a style guide that stays in sync with the patterns within an application. This is effectively an application, consuming the pattern library contents, specifically built to present the resources exposed by the pattern library.
    </Paragraph>,

    <Paragraph key="2">
      <Strong>'Style Guide Driven Development' is the process of developing encapsulated patterns in the style guide</Strong>, outside the context of the end goal product.
    </Paragraph>,
  ],
}, {
  name: 'How does \'Style Guide Driven Development\' work?',
  children: [],
}];
