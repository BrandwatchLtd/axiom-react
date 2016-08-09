# Getting started with the Pattern Library in a new App

If you're on the current popular stack train (React, Redux, Webpack etc...) then head over to the [Axiom Starter App](https://github.com/BrandwatchLtd/axiom-starter-app) where it's ready to roll.


# Getting started with the Pattern Library in an existing App

###### Add the dependency to your `package.json` file *(for the moment this needs to be done via the git link)*.

```json
{
  "dependencies": {
    "bw-axiom": "git+ssh://git@github.com/BrandwatchLtd/axiom.git#v{VERSION_NUMBER}",
  }
}
```

### Setup

#### Variables

The Sass variables are all in Javascript files, this is so they can easily be configured and included into Javascript (for example with PropTypes) (it's much easier to get variables into Sass than it is to get them out)... for this we use a custom [sass importer](https://github.com/sass/node-sass#importer--v200---experimental).

##### Sass variable importer [REQUIRED]

This adds the ability to inject the Javascript Sass variables using node-sass' custom [sass importer](https://github.com/sass/node-sass#importer--v200---experimental)

In your webpack loaders config (or any node-sass config), use the already provided importer and any custom importers you would like to create ([see docs](../../utils/sass-variable-importer.js)).


```javascript 
// Webpack config example 

import axiomSassVariableImporter from 'bw-axiom/lib/utils/axiom-sass-variable-importer';
import createSassVariableImporter from 'bw-axiom/lib/utils/axiom-sass-variable-importer';

{
  sassLoader: {
    importer: [
      axiomSassVariableImporter()
      [, createSassVariableImporter(/myVarFileFormat\.js$/, [Alias, Alias])] // Optional
    ],
  }
}
```

##### Sass variable override loader [OPTIONAL]

This is for overriding any of the Axiom defaults, whether they are in the Sass or in the Javascript files. 

In your webpack loaders config include the `sass-variable-override` loader before your other loaders. Like ... 

```javascript
{
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
}
```

