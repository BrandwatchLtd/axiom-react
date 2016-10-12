import React, { Component } from 'react';
import Heading from '../../components/typography/Heading';
import Link from '../../components/typography/Link';
import Paragraph from '../../components/typography/Paragraph';
import Example from 'style-guide/components/Example/Example';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export default class Sass extends Component {
  render() {
    return (
      <Example name="Sass Setup">
        <Heading level={ 5 }>Variables</Heading>
        <Paragraph>
          The Sass variables are all in Javascript files, this is so they can easily be configured and included into Javascript (for example with PropTypes) (it's much easier to get variables into Sass than it is to get them out)... for this we use a custom <Link href="https://github.com/sass/node-sass#importer--v200---experimental">sass importer</Link>.
        </Paragraph>

        <Heading level={ 5 }>Sass variable importer [REQUIRED]</Heading>
        <Paragraph>
          This adds the ability to inject the Javascript Sass variables using node-sass' custom <Link href="https://github.com/sass/node-sass#importer--v200---experimental">sass importer</Link>
        </Paragraph>

        <Paragraph>
          In your webpack loaders config (or any node-sass config), use the already provided importer and any custom importers you would like to create (<Link href="https://github.com/BrandwatchLtd/axiom/utils/sass-variable-importer.js">see docs</Link>).
        </Paragraph>

        <CodeSnippet language="js">{
`// Webpack config example

import axiomSassVariableImporter from 'bw-axiom/lib/utils/axiom-sass-variable-importer';
import createSassVariableImporter from 'bw-axiom/lib/utils/axiom-sass-variable-importer';

{
  sassLoader: {
    importer: [
      axiomSassVariableImporter()
      [, createSassVariableImporter(/myVarFileFormat\.js$/, [Alias, Alias])] // Optional
    ],
  }
}`
        }</CodeSnippet>

        <Heading level={ 5 }>Sass variable override loader [OPTIONAL]</Heading>
        <Paragraph>
          This is for overriding any of the Axiom defaults, whether they are in the Sass or in the Javascript files.
        </Paragraph>

        <Paragraph>
          In your webpack loaders config include the `sass-variable-override` loader before your other loaders. Like ...
        </Paragraph>

        <CodeSnippet language="js">{
`{
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel',
          'sass-variable-override?location=path/to/your/override/file.js'
        ]
      }
    ]
  }
}`
        }</CodeSnippet>
      </Example>
    );
  }
}
