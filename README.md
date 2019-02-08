<p align="center">
  <a href="https://axiom.brandwatch.com/">
    <img alt="axiom" src="./site/assets/axiom-text.png" height="50" width="177">
  </a>
</p>

<p align="center">
  Brandwatch design system and React pattern library
</p>

<p align="center">
  <a href="https://travis-ci.org/BrandwatchLtd/axiom"><img alt="Travis Status" src="https://img.shields.io/travis/BrandwatchLtd/axiom.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/@brandwatch/axiom-materials"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@brandwatch/axiom-materials.svg?style=flat-square"></a>
</p>

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

Axiom uses lerna and yarn workspaces to manage the various packages. To get up and running developing locally, you need the lerna cli. We're using the [latest stable](nodejs.org/en/download/current) Node.js release.

```
git clone git@github.com:BrandwatchLtd/axiom-react.git
cd axiom
yarn
yarn start
```

### Contributing

Please checkout the [CONTRIBUTING.md](./CONTRIBUTING.md) but basically we use the conventional commit format (google it) to handle automatic publishing, check tests and add them where appropriate and check linting.

Styleguide driven development is crucial. Most changes should be visble and replicable through the style guide and, where appropriate, through design review.
