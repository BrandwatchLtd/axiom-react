## Internet Explorer support

Axiom doesn't support IE out of the box because of requirements for scoped CSS variables, however you can get IE support for everything apart from using multiple and nested themes.

If you need IE support, you need to provide the postcss-cssnext plugin with the exported variables (provided in the NPM package).

```js
module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          /**
           * Disabling warnings is recommended to silence the scoped variable
           * warnings.
           */
          warnings: false,
          /**
           * Add the provided variables to be preprocessed. The example below
           * uses the day theme, although the dark theme can be used
           * (cssvars-theme-dark). One theme MUST be provided.
           */
          variables: Object.assign({},
            require('bw-axiom/lib/cssvars-all'),
            require('bw-axiom/lib/cssvars-theme-day'),
          ),
        },
      },
    }),
  ],
};

```
