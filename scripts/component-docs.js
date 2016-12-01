/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const reactDocgen = require('react-docgen');

function castValue(value) {
  if (Array.isArray(value)) {
    return value.map(normaliseValue);
  }

  const stringRx = /(^["'])(.*)(["']$)/;

  if (!isNaN(+value)) return +value;
  if (value === 'true' || value === 'false') return JSON.parse(value);
  if (stringRx.test(value)) return value.replace(stringRx, '$2');

  return value;
}

function normaliseValue(prop) {
  return !prop ? undefined : Object.assign({}, prop, {
    value: castValue(prop.value),
  });
}

function flattenValues({ name, value }, values = []) {
  if (Array.isArray(value)) {
    value.forEach((value) => flattenValues(value, values));
  } else if (value) {
    values.push(value);
  }

  return values;
}

function extractProps({ props = {} }) {
  return Object.keys(props).reduce((eProps, prop) => Object.assign({}, eProps, {
    [prop]: Object.assign(props[prop], {
      defaultValue: normaliseValue(props[prop].defaultValue),
      type: normaliseValue(props[prop].type),
      values: flattenValues(normaliseValue(props[prop].type)),
    }),
  }), {});
}

module.exports = function generate(file) {
  try {
    return extractProps(reactDocgen.parse(
      fs.readFileSync(path.resolve(__dirname, file))
    ));
  } catch (error) {
    console.error(`ERROR: Extract Docs from '${file}'`);
    console.error(error);
  }
};
