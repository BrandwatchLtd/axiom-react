# Getting started with the Pattern Library in a new App

If you're on the current popular stack train (React, Redux, Webpack etc...) then head over to the [Axiom Starter App](https://github.com/BrandwatchLtd/axiom-starter-app) where it's ready to roll.


# Getting started with the Pattern Library in an existing App

##### Add the dependency to your `package.json` file *(for the moment this needs to be done via the git link)*.

```json
{
  "dependencies": {
    "bw-axiom": "git+ssh://git@github.com/BrandwatchLtd/axiom.git#v{VERSION_NUMBER}",
  }
}
```

##### Setup [node-sass](https://github.com/sass/node-sass)

The Sass variables are all in the JS files, this is so they can easily be configured and included into JS (it's much easier to get variables into Sass than it is to get them out)... for this we use a custom [sass importer](https://github.com/sass/node-sass#importer--v200---experimental).

Create a JS Sass variable file.

```js
// vars-file.js
import axiomVars from 'bw-axiom/lib/sass';

module.exports = {
  ...axiomVars,
};
```

Where ever you are setting up `node-sass` from, pass in the following importer property...

```js
import { variableImporter } from 'bw-axiom/lib/utils/sass';

const nodeSassConfig = {
  importer: variableImporter('/Absolute/path/to/your/sass/vars-file.js', 'axiom-vars'),
};
```

then just include the variables into your Sass file.

```scss
@include 'axiom-vars';
```
