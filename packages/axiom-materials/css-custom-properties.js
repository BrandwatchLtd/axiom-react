const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const browsers = require('./browsers');

const isCustomProperty = ({ type, prop }) =>
  type === 'decl' && /^--/.test(prop);

const extract = css => {
  let vars = ':root {\n';

  postcss()
    .process(css)
    .root.walk(node => {
      if (isCustomProperty(node)) {
        vars += `  ${node.prop}: ${node.value};\n`;
      }
    });

  return vars + '}';
};

const resolve = variables => {
  return postcss([
    require('postcss-cssnext')({
      browsers,
      features: {
        customProperties: {
          preserve: 'computed',
          appendVariables: true,
        },
      },
    }),
  ]).process(variables);
};

const convert = result => {
  const variables = {};

  result.root.walk(node => {
    if (node.value) {
      variables[node.prop] = node.value;
    }
  });

  return variables;
};

const customPropertyToJs = filePath =>
  [extract, resolve, convert].reduce(
    (result, fn) => fn(result),
    fs.readFileSync(path.resolve(__dirname, filePath), 'utf8')
  );

module.exports = ({ theme }) => ({
  ...customPropertyToJs('./src/animations.css'),
  ...customPropertyToJs('./src/colors.css'),
  ...customPropertyToJs('./src/layout.css'),
  ...customPropertyToJs('./src/opacities.css'),
  ...customPropertyToJs('./src/sizing.css'),
  ...customPropertyToJs('./src/typography.css'),
  ...(theme === 'day'
    ? {
        ...customPropertyToJs('./src/theme-night.css'),
        ...customPropertyToJs('./src/theme-day.css'),
      }
    : {
        ...customPropertyToJs('./src/theme-day.css'),
        ...customPropertyToJs('./src/theme-night.css'),
      }),
});
