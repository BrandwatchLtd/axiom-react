## Setting up postcss [create-react-app](https://github.com/facebookincubator/create-react-app)

#### Add the required modules

```
yarn add postcss postcss-cssnext postcss-import
```

#### Create the postcss.config.js file

```js
module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: require('bw-axiom/lib/materials/theme-light.json'),
        },
      },
    }),
  ],
};
```

#### Point your postcss setup to that config file

Example for webpack

```js
{
  test: /\.css$/,
  use: [
    {
      loader: 'style-loader',
    }, {
      loader: 'css-loader,
      options: {
        importLoaders: 1,
      },
    }, {
      loader: 'postcss-loader',
      options: {
        config: require('path/to/postcss.config.js'),
      },
    },
  ],
}
```
