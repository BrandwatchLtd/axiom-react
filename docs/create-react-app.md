## Using [create-react-app](https://github.com/facebookincubator/create-react-app)

**Note: You will need to eject because Axiom uses cssnext, this may change in the future**.

#### Set up create-react-app

```
yarn global add create-react-app
create-react-app my-app
cd my-app
```

#### Set up for Axiom

```
yarn eject
yarn add bw-axiom postcss-cssnext postcss-import
```

#### Set up postcss config

Create `config/postcss.config.js`, doesn't have to be in config directory but that's where create-react-app keeps all of the config files.

```js
// CRA might already have some custom postcss config setup,
// so these configs might require some merging to make it
// work with its current setup.

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: require('[path-to-bw-axiom]/lib/materials/cssvars-theme-light'),
        },
      },
    }),
  ],
};
```

Inside `config/webpack.config.dev.js` replace the css rule for

```js
{
  test: /\.css$/,
  use: ['style-loader', {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
    },
  }, {
    loader: 'postcss-loader',
    options: require('./postcss.config.js'),
  }],
}
```

Ready to go!

```
yarn start
```


#### Set up production build

Inside `config/webpack.config.prod.js` replace the css rule for

```js
{
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    use: [{
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        minimize: true,
      },
    }, {
      loader: 'postcss-loader',
      options: require('./postcss.config.js'),
    }],

    // This is a create-react-app thing, so might change from
    // version to version,
    publicPath: shouldUseRelativeAssetPaths
      ? Array(cssFilename.split('/').length).join('../')
      : '',
  }),
}
```

