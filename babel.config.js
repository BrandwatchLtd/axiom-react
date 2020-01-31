module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
  ],
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: [
            'last 2 Firefox versions',
            'last 2 Chrome versions',
            'last 2 Edge versions',
            'last 2 Safari versions',
            'IE 11',
          ],
        },
      },
    ],
  ],
  env: {
    development: {
      plugins: [
        '@brandwatch/babel-plugin-transform-svg-axiom',
        'react-hot-loader/babel',
      ],
    },
    static: {
      plugins: [
        '@brandwatch/babel-plugin-transform-svg-axiom',
        '@brandwatch/babel-plugin-axiom-imports',
        'transform-react-remove-prop-types',
      ],
    },
    production: {
      plugins: [
        '@brandwatch/babel-plugin-transform-svg-axiom',
        '@brandwatch/babel-plugin-axiom-imports',
        '@babel/plugin-transform-modules-commonjs',
      ],
    },
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
