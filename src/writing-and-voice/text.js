import React from 'react';
import List from '../components/typography/List';
import ListItem from '../components/typography/ListItem';
import Paragraph from '../components/typography/Paragraph';
import Strong from '../components/typography/Strong';

export const title = 'Character';
export const id = 'character';

export const examples = [{
  name: 'Emphasize important words in short help texts',
  children: (
    <Paragraph>
      Make <Strong>important</Strong> words in help texts <Strong>bold</Strong> so users can skim through them more easily. You can use the utility classes for this. Try to highlight the words that embody the message best.
    </Paragraph>
  ),
}, {
  name: 'Full stops',
  children: (
    <Paragraph>
      We have a simple policy. If it is a sentence, it has full stop. Titles, incomplete sentences, bullet lists or enumerations don't have a full stop.
    </Paragraph>
  ),
}, {
  name: 'Casing Conventions',
  children: [
    <Paragraph key="1">
      Title Casing - not only the first word is capitalized but all (except ‘small’ words like “and”, “to”, “for” or “the”). e.g.: “<Strong>C</Strong>reate <Strong>N</Strong>ew <Strong>P</Strong>roject”.
    </Paragraph>,

    <Paragraph key="2">
      Title Casing should be used in:
    </Paragraph>,

    <List key="3">
      <ListItem>Utility bar / window titles</ListItem>
      <ListItem>Menu entries</ListItem>
      <ListItem>Tab titles</ListItem>
      <ListItem>HTML header title</ListItem>
      <ListItem>Main navigation links</ListItem>
      <ListItem>Buttons</ListItem>
    </List>,

    <Paragraph key="4">
      Sentence casing - just like a sentence: first word capitalized. e.g.: “<Strong>G</Strong>et an email when there's a sudden increase in discussion[...]”.
    </Paragraph>,

    <Paragraph key="5">
      Sentence casing should be used for:
    </Paragraph>,

    <List key="6">
      <ListItem>Placeholder text in input fields</ListItem>
      <ListItem>Form labels (next to or above text inputs, check boxes etc.)</ListItem>
      <ListItem>‘activity’ links, e.g. “Create one”, “Collapse list”</ListItem>
      <ListItem>Messages of all sorts (“Please wait…” or longer stuff)</ListItem>
      <ListItem>Entries in (filter) drop downs</ListItem>
      <ListItem>Help texts</ListItem>
    </List>,
  ],
}];
