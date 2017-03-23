## Axiom - Pattern Library

[![Build Status](https://travis-ci.org/BrandwatchLtd/axiom.svg?branch=master)](https://travis-ci.org/BrandwatchLtd/axiom)
[![npm version](https://badge.fury.io/js/bw-axiom.svg)](https://badge.fury.io/js/bw-axiom)

A consumable library of Brandwatch UI & UX patterns. 

### Installation

```
npm install bw-axiom --save
yarn add bw-axiom
```


### Features

* Materials (colors, sizing) to create custom components while following patterns.
* Components to encapsulate templates, styles and behaviour. 
* Composites for larger reusable multi component solutions.
* Utilities to apply UX patterns (like date and number formatting).
* Light and Dark themes at a global level. 

### Getting Started

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Login } from 'bw-axiom';

render(
  <Login 
      application="MyApp"
      backgroundImage="./image.png"
      onSubmit={ () => {} } />
, document.getElementById('react-root'))
```

### Setting up CSS and Themes (postcss/cssnext)
```
// postcss.config.js

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: require('bw-axiom/lib/materials/theme-[light|dark].json'),
        },
      },
    }),
  ],
};
```

### Using just the CSS

The React components provide an abstraction of the templates and CSS, which greatly reduces any needed maintenance when CSS classes or the HTML structure to a component changes. They also encapsulate the behaviour of more interactive components, so components that do require Javascript will not work and will require you to plumb it all together.

The compiled CSS file is stored on the Brandwatch Google Cloud Platform CDN or target individual CSS files from the node_module.

```
http://axiom.bwcom.io/axiom-{THEME}.{VERSION}.min.css
```

**Template and CSS changes are not classed as breaking changes and are not specified in the release notes**

### Developing in the Style Guide 

```
git clone git@github.com:BrandwatchLtd/axiom.git
cd axiom 
yarn install
yarn start
```
