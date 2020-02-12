module.exports = {
  plugins: ['@babel/plugin-proposal-class-properties', '@brandwatch/babel-plugin-transform-svg-axiom'],
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
          ],
        },
      },
    ],
  ],
  env: {
    development: {
      plugins: [
        'react-hot-loader/babel',
      ],
    },
    production: {
      plugins: [
        'transform-react-remove-prop-types',
      ],
    },
    cjs: {
      plugins: [
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-modules-commonjs',
      ],
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
        ],
      ],
    },
  },
};
