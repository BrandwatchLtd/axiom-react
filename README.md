<p align="center">
  <a href="https://axiom.brandwatch.com/">
    <img alt="axiom" src="./.storybook/static_assets/axiom-text.png" height="50" width="177">
  </a>
</p>

<p align="center">
  Brandwatch design system and React pattern library
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@brandwatch/axiom-materials"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@brandwatch/axiom-materials.svg?style=flat-square"></a>
</p>

### Getting started

The best way to consume Axiom-React is with the `npm` package.

First install which part of Axiom you need - Refer to the [Packages table](#Packages) for more information about what is within each package.

#### Adding the button component

```
npm i @brandwatch/axiom-components --save
```

```
import { Button } from '@brandwatch/axiom-components';
```

You can now use the button component - To see how this can be styled and configured see [Button](https://axiom.brandwatch.com/docs/packages/axiom-components/button)

```
<Button variant="primary">
  Primary
</Button>
```

#### Set a theme

Axiom needs to run in one of two [themes](https://axiom.brandwatch.com/docs/packages/axiom-materials/themes), day or night.

The class of `ax-theme--day` or `ax-theme--night` should be applied to either `<html>`, `<body>`, or an app encompassing `<div>`

### Packages

This is the monorepo for Axiom packages.


| package | description |     version     |
| --- | --- |:---:|
| [axiom-automation-testing](./packages/axiom-automation-testing) | Provides IDs and selectors for targeting Axiom internal elements for Automation testing | [![npm](https://img.shields.io/npm/v/@brandwatch/axiom-automation-testing.svg?style=flat-square)](https://www.npmjs.com/package/@brandwatch/axiom-automation-testing) |
| [axiom-charts](./packages/axiom-charts) | Provides Axiom charting and data visualisation React components | [![npm](https://img.shields.io/npm/v/@brandwatch/axiom-charts.svg?style=flat-square)](https://www.npmjs.com/package/@brandwatch/axiom-charts) |
| [axiom-components](./packages/axiom-components) | Provides core Axiom components for building Brandwatch UIs | [![npm](https://img.shields.io/npm/v/@brandwatch/axiom-components.svg?style=flat-square)](https://www.npmjs.com/package/@brandwatch/axiom-components) |
| [axiom-composites](./packages/axiom-composites) | Provides Brandwatch contexutal components, comprising of Axiom components and materials. | [![npm](https://img.shields.io/npm/v/@brandwatch/axiom-composites.svg?style=flat-square)](https://www.npmjs.com/package/@brandwatch/axiom-composites) |
| [axiom-documentation-loader](./packages/axiom-documentation-loader) | Webpack loader for extracting React component prop types and descriptions. | [![npm](https://img.shields.io/npm/v/@brandwatch/axiom-documentation-loader.svg?style=flat-square)](https://www.npmjs.com/package/@brandwatch/axiom-documentation-loader) |
| [axiom-documentation-viewer](./packages/axiom-documentation-viewer) | Provides React components for displaying, testing and viewing React components in configurable states. | [![npm](https://img.shields.io/npm/v/@brandwatch/axiom-documentation-viewer.svg?style=flat-square)](https://www.npmjs.com/package/@brandwatch/axiom-documentation-viewer) |
| [axiom-formatting](./packages/axiom-formatting) | Axiom resources for formatting dates and numbers | [![npm](https://img.shields.io/npm/v/@brandwatch/axiom-formatting.svg?style=flat-square)](https://www.npmjs.com/package/@brandwatch/axiom-formatting) |
| [axiom-localization](./packages/axiom-localization) | Resources for helping out with localizations | [![npm](https://img.shields.io/npm/v/@brandwatch/axiom-localization.svg?style=flat-square)](https://www.npmjs.com/package/@brandwatch/axiom-localization) |
| [axiom-materials](./packages/axiom-materials) | Low level resources, like colours and sizing variables to help build components | [![npm](https://img.shields.io/npm/v/@brandwatch/axiom-materials.svg?style=flat-square)](https://www.npmjs.com/package/@brandwatch/axiom-materials) |
| [axiom-utils](./packages/axiom-utils) | Helpful javascript utilities | [![npm](https://img.shields.io/npm/v/@brandwatch/axiom-utils.svg?style=flat-square)](https://www.npmjs.com/package/@brandwatch/axiom-utils) |
| [babel-plugin-axiom-imports](./packages/babel-plugin-axiom-imports) | An Axiom specific babel plugin that transforms and removes unused Axiom exports. | [![npm](https://img.shields.io/npm/v/@brandwatch/babel-plugin-axiom-imports.svg?style=flat-square)](https://www.npmjs.com/package/@brandwatch/babel-plugin-axiom-imports) |
| [babel-plugin-transform-svg-axiom](./packages/babel-plugin-transform-svg-axiom) | A babel plugin that recolours, optimises and inlines SVG files | [![npm](https://img.shields.io/npm/v/@brandwatch/babel-plugin-transform-svg-axiom.svg?style=flat-square)](https://www.npmjs.com/package/@brandwatch/babel-plugin-transform-svg-axiom) |
| [eslint-config-axiom](./packages/eslint-config-axiom) | eslint configurations used by Axiom and some other Brandwatch applications | [![npm](https://img.shields.io/npm/v/@brandwatch/eslint-config-axiom.svg?style=flat-square)](https://www.npmjs.com/package/@brandwatch/eslint-config-axiom) |
| [stylelint-config-axiom](./packages/stylelint-config-axiom) | stylelint configurations used by Axiom and some other Brandwatch applications | [![npm](https://img.shields.io/npm/v/@brandwatch/stylelint-config-axiom.svg?style=flat-square)](https://www.npmjs.com/package/@brandwatch/stylelint-config-axiom) |

### Developing

Axiom uses lerna and yarn workspaces to manage the various packages. To get up and running developing locally, you need the lerna cli. We're using the [latest stable](https://nodejs.org/en/download/current) Node.js release.

```
git clone git@github.com:BrandwatchLtd/axiom-react.git
cd axiom
yarn
yarn start
```

### Contributing

Styleguide driven development is crucial. Most changes should be visble and replicable through the style guide and, where appropriate, through design review.

Please feel free to seek help on our [#axiom-clinic channel on Slack](https://brandwatch.slack.com/messages/C4D4UEJRH)
Please also checkout the [CONTRIBUTING.md](CONTRIBUTING.md)

##### Commits

Commits use the [https://github.com/conventional-changelog-archived-repos/conventional-changelog-angular/blob/master/convention.mdconventional][commit format from angular]. Optionally you can create commits in the appropriate form by running:

```shell script
npx git-cz
```

and then following the CLI instructions to compose the message.



