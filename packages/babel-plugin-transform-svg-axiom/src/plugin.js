const { extname, dirname } = require('path');
const { readFileSync } = require('fs');
const resolveFrom = require('resolve-from');
const SVGO = require('svgo');
const svgo = new SVGO({
  plugins: [
    { removeAttrs: ['id'] },
    { removeComments: true },
    { removeDefs: true },
    { removeDesc: true },
    { removeDoctype: true },
    { removeDimensions: false },
    { removeTitle: true },
  ],
});

/**
 * Credit to Shopify Polaris for the approach.
 * https://github.com/Shopify/polaris/blob/master/config/rollup/plugins/icon.js
 */
const VIEWBOX_REGEX = /viewBox="([^"]*)"/;
const SVG_REGEX = /(<svg[^>]*>|<\/svg>)/g;
const COLOR_REGEX = /(fill|stroke)="([^"]*)"/g;

module.exports = () => ({
  visitor: {
    CallExpression(path, state) {
      const callee = path.get('callee');

      if (callee.isIdentifier() && callee.equals('name', 'require')) {
        const arg = path.get('arguments')[0];
        const requirePath = arg.node.value;

        if (arg && arg.isStringLiteral() && extname(requirePath) === '.svg') {
          const filePath = state.file.opts.filename;
          const svgPath = resolveFrom(dirname(filePath), requirePath);
          let svgData;

          svgo.optimize(readFileSync(svgPath, 'utf8'), result => {
            const viewBox = VIEWBOX_REGEX.exec(result.data)[1];
            const { height, width } = result.info;
            const finalSource = result.data.replace(
              COLOR_REGEX,
              (m, prop, value) => {
                if (value === 'none') return `${prop}="none"`;
                if (value.includes('#000')) return `${prop}="currentColor"`;
                return `${prop}="${value}"`;
              }
            );

            svgData = {
              body: finalSource.replace(SVG_REGEX, ''),
              height,
              viewBox,
              width,
            };
          });

          path.replaceWithSourceString(JSON.stringify(svgData));
        }
      }
    },
  },
});
