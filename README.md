## Axiom - Pattern Library

[![Build Status](https://travis-ci.com/BrandwatchLtd/axiom.svg?token=1ejoq3JpxReLqRyzfSo2&branch=master)](https://travis-ci.com/BrandwatchLtd/axiom)

A consumable library of Brandwatch UI & UX patterns. 


### Installation

```
npm install bw-axiom --save
yarn add bw-axiom
```


### Features

* React components to encapsulate templates, styles and behaviour. 
* React composites for larger reusable multi component solutions.
* Utilities to apply UX patterns (like date and number formatting).
* Light and Dark themes at a global level and restricted component level. 

### Getting Started

```jsx
import { Login } from 'bw-axiom';

class YourApp extends Component {
  render() {
    return (
      <Login { ...pops } />
    );
  }
}
```


### Supported Browsers

* **Chrome**: 49+
* **Firefox**: 31+
* **Safari**: 9.3+
* **IE**: NOPE _[1]_
* **Edge**: Preview _[2]_

[1] Not currently supported due to lack of Custom CSS Properties. We may decide to include at PostCSS step that goes through and replaces CSS variables.
[2] Custom CSS Properties are currently in Edge Preview. 


### Recommended base CSS

* Composites like the Login page require a parent element that has a minimum width and height of the window. 
* Axiom uses [Custom CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) for swapping out themes. 

```scss
@import '~bw-axiom/design-patterns/colors/colors-dark'; // or
@import '~bw-axiom/design-patterns/colors/colors-light';


:root {
  @include theme-dark; // or
  @include theme-light;
}

html {
  height: 100%;
}

// Basic theming 
body {
  background-color: var(--color-context-background);
  color: var(--color-context-text);
}

// Minimum height. 
body,
.Any-other-root-app-elements {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 100%;
}
```


### Using just the CSS

The React components provide an abstraction of the templates and CSS, which greatly reduces any needed maintenance when CSS classes or the HTML structure to a component changes. They also encapsulate the behaviour of more interactive components, so components that do require Javascript will not work and will require you to plumb it all together.

Just using the CSS is highly unrecommended but it is possible. The compiled CSS file is stored on the Brandwatch Google Cloud Platform CDN or target individual Sass files from the node_modules.

```
CDN
http://axiom.bwcom.io/axiom.{VERSION}.min.css
```


### Developing in the Style Guide 

```
git clone git@github.com:BrandwatchLtd/axiom.git
cd axiom 
yarn install
yarn start
```
