import React, { Component } from 'react';
import Heading from '../../../components/typography/Heading';
import Link from '../../../components/typography/Link';
import Paragraph from '../../../components/typography/Paragraph';
import Example from 'style-guide/components/Example/Example';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export default class Installation extends Component {
  render() {
    return (
      <Example name="Installation">
        <Heading>Getting started with the Pattern Library in a new App</Heading>
        <Paragraph>
          If you're on the current popular stack train (React, Redux, Webpack etc...) then head over to the <Link href="https://github.com/BrandwatchLtd/axiom-starter-app">Axiom Starter App</Link> where it's ready to roll.
        </Paragraph>

        <Heading>Getting started with the Pattern Library in an existing App</Heading>
        <CodeSnippet language="json">{
`{
  "dependencies": {
    "bw-axiom": "git+ssh://git@github.com/BrandwatchLtd/axiom.git#v{VERSION_NUMBER}",
  }
}`
        }</CodeSnippet>
      </Example>
    );
  }
}
