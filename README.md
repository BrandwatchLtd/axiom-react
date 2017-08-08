## Axiom - Pattern Library

[![Build Status](https://travis-ci.org/BrandwatchLtd/axiom.svg?branch=master)](https://travis-ci.org/BrandwatchLtd/axiom)
[![npm version](https://badge.fury.io/js/bw-axiom.svg)](https://badge.fury.io/js/bw-axiom)

A consumable library of Brandwatch UI & UX patterns.

### Installation

```
yarn add bw-axiom
```

### Features

* Materials (colors, sizing) to create custom components while following patterns.
* Components to encapsulate templates, styles and behaviour.
* Composites for larger reusable multi component solutions.
* Utilities to apply UX patterns (like date and number formatting).
* Light and Dark themes

### [Supported Browsers](./browsers.js)

Need IE Support? [See the the setup guide here]('./docs/internet-explorer.md')

### Getting Started

The following styles should be added to the body - or root element to which Axiom styles are being applied - if you wish to make use of the default background and colour styles. These are also needed if you wish to make use of the light/dark theme switching.

```
body {
  background-color: var(--color-context-background);
  color: var(--color-context-text);
}
```

* Using create-react-app? [See the setup guide here](./docs/create-react-app.md)
* Have a custom set up? All you need is to set up postcsss, [see the setup guide here](./docs/postcss.md)

### Using just the CSS

The React components provide an abstraction of the templates and CSS, which greatly reduces any needed maintenance when CSS classes or the HTML structure to a component changes. They also encapsulate the behaviour of more interactive components, so components that do require Javascript will not work and will require you to plumb it all together.

The compiled CSS file is stored on the Brandwatch Google Cloud Platform CDN or target individual CSS files from the node_module.

```
http://axiom.bwcom.io/axiom.{VERSION}.min.css
```

**Template and CSS changes are not classed as breaking changes and are not specified in the release notes**

### Developing in the Style Guide

```
git clone git@github.com:BrandwatchLtd/axiom.git
cd axiom
yarn install
yarn start
```

### Testing within an application

Npm/yarn link won't work out of the box as the `main` directory specified in `package.json` is `lib`. To populate this directory with your local changes, run `yarn build:local`. You can then run `npm link` as normal, and then `npm link bw-axiom` from your application directory.
