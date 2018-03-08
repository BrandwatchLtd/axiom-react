# Migration guide to swapping over to new lerna packages.

## v33.8.0 > @brandwatch/*

#### 1) babel-plugin-axiom

The babel plugin is no longer needed/works and should be removed.

##### .babelrc

```diff
{
  "plugins": [
-    "axiom"
  ]
}
```

#### 2) Linting

`eslint` and `stylelint` configs are now as modules

##### .eslintrc

```diff
{
-  "extends": ["eslint-config-axiom"],
+  "extends": ["@brandwatch/eslint-config-axiom"],
}
```

##### .stylelintrc

```diff
{
-  "extends": ["styelint-config-axiom"],
+  "extends": ["@brandwatch/styelint-config-axiom"],
}
```

#### 3) Postcss

`post-css-import` plugin is no longer needed and can be removed from `postcss.config.js`.

If you were preprocessing variables (mainly for IE11) then there is a function exported from `@brandwatch/axiom-materials/css-custom-properties`, that will export the correct variables for a given theme (see example config below).

If you were using the browsers list exported by Axiom, this location has changed also (see example config below).


##### postcss.config.js

```diff
+ const cssCustomProperties = require('@brandwatch/axiom-materials/css-custom-properties');

module.exports = {
  plugins: [
-    require('postcss-import'),
    require('postcss-cssnext')({
      browsers: [
-        ...require('@bw-axiom/browsers'),
+        ...require('@brandwatch/axiom-materials/browsers'),
        'IE 11',
      ],
      features: {
        customProperties: {
          warnings: false,
-          variables: Object.assign({},
-            require('bw-axiom/lib/materials/cssvars-all'),
-            require('bw-axiom/lib/materials/cssvars-theme-day')
-          ),
+          variables: cssCustomProperties({ theme: 'day' }),
        },
      },
    }),
  ],
};
```

#### 4) imports

Existing imports will needed to be updated, and will be one of the following.

* `@brandwatch/axiom-automation-testing`
* `@brandwatch/axiom-charts`
* `@brandwatch/axiom-components`
* `@brandwatch/axiom-composites`
* `@brandwatch/axiom-formatting`
* `@brandwatch/axiom-materials`
* `@brandwatch/axiom-utils`

_All other packages are new exports._

#### 5) A couple of component renames were included in the new packages.

Trying to resolve some confusion around a mix of Dropdown and Context components, while the Context components are still exported you don't need to directly use them and Dropdown and Tooltip version are now available.

```jsx
<DropdownContent> is now <DropdownSource>
<PositionContent> is now <PositionSource>
<TooltipContent> is now <TooltipSource>

<Context> when used inside Dropdown should now be <DropdownContext>
<Context> when used inside Tooltip should now be <TooltipContext>

<ContextBox> when used inside Dropdown should now be <DropdownContent>
<ContextBox> when used inside Tooltip should now be <TooltipContent>
<ContextBox> has been renamed to <ContextContent>

<ChangePassword> has been renamed to <ChangePasswordDialog>

<TextGroup> has been renamed to <InputWrapper>
```

The `ContextComponent` prop on `BarChart`, `ColumnChart` and `DotPlotChart` has been renamed to `DropdownContext`, as this will make way for `TooltipContext` to also be used for hover functionality.
