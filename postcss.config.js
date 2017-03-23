module.exports = (ctx) => ({
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({
      browsers: [
        'last 2 versions',
        'not Explorer <= 10',
        'not ExplorerMobile <= 10',
      ],
      features: {
        customProperties: {
          variables: Object.assign({},
            require(`./src/materials/theme-${ctx.theme || 'light'}.json`)
          ),
        },
      },
    }),
  ],
});
