import React from 'react';
import Link from '../components/typography/Link';
import Paragraph from '../components/typography/Paragraph';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export const title = 'Getting started';
export const id = 'getting-started';

export const examples = [{
  name: 'Getting started with the Pattern Library in a new App',
  children: (
    <Paragraph>
      If you're on the current popular stack train (React, Redux, Webpack etc...) then head over to the <Link href="https://github.com/BrandwatchLtd/axiom-starter-app">Axiom Starter App</Link> where it's ready to roll.
    </Paragraph>
  ),
}, {
  name: 'Getting started with the Pattern Library in an existing App',
  children: [{
    name: 'Add the dependency to your `package.json` file (for the moment this needs to be done via the git link).',
    children: (
      <CodeSnippet language="json">{
`{
  "dependencies": {
    "bw-axiom": "git+ssh://git@github.com/BrandwatchLtd/axiom.git#v{VERSION_NUMBER}",
  }
}`
      }</CodeSnippet>
    ),
  }],
}, {
  name: 'Sass setup',
  children: [{
    name: 'Variables',
    children: (
      <Paragraph>
        The Sass variables are all in Javascript files, this is so they can easily be configured and included into Javascript (for example with PropTypes) (it's much easier to get variables into Sass than it is to get them out)... for this we use a custom <Link href="https://github.com/sass/node-sass#importer--v200---experimental">sass importer</Link>.
      </Paragraph>
    ),
  }, {
    name: 'Sass variable importer [REQUIRED]',
    children: [
      <Paragraph key="1">
        This adds the ability to inject the Javascript Sass variables using node-sass' custom <Link href="https://github.com/sass/node-sass#importer--v200---experimental">sass importer</Link>
      </Paragraph>,

      <Paragraph key="2">
        In your webpack loaders config (or any node-sass config), use the already provided importer and any custom importers you would like to create (<Link href="https://github.com/BrandwatchLtd/axiom/utils/sass-variable-importer.js">see docs</Link>).
      </Paragraph>,

      <CodeSnippet key="3" language="js">{
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
      }</CodeSnippet>,
    ],
  }, {
    name: 'Sass variable override loader [OPTIONAL]',
    children: [
      <Paragraph key="1">
        This is for overriding any of the Axiom defaults, whether they are in the Sass or in the Javascript files.
      </Paragraph>,

      <Paragraph key="2">
        In your webpack loaders config include the `sass-variable-override` loader before your other loaders. Like ...
      </Paragraph>,

      <CodeSnippet key="3" language="js">{
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
      }</CodeSnippet>,
    ],
  }],
}];
