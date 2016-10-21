import React, { Component } from 'react';
import Heading from '../../components/typography/Heading';
import Paragraph from '../../components/typography/Paragraph';
import Example from 'style-guide/components/Example/Example';

export default class Introduction extends Component {
  render() {
    return (
      <Example name="Introduction">
        <Heading level={ 5 }>HELLO</Heading>
        <Paragraph>
          This is awesome
        </Paragraph>
      </Example>
    );
  }
}
