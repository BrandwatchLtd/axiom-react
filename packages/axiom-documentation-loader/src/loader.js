const reactDocgen = require('react-docgen');
const isPlainObject = require('lodash.isplainobject');

function castValue(value) {
  if (Array.isArray(value)) {
    return value.map(normaliseValue);
  } else if (isPlainObject(value)) {
    return normaliseValue(value);
  }

  const evaldValue = eval(value);

  if (typeof evaldValue === 'function') {
    return evaldValue.name;
  }

  return evaldValue;
}

function normaliseValue(prop) {
  return (
    prop &&
    Object.assign({}, prop, {
      value: castValue(prop.value),
    })
  );
}

function flattenValues({ value }, values = []) {
  if (Array.isArray(value)) {
    value.forEach(value => flattenValues(value, values));
  } else if (isPlainObject(value)) {
    flattenValues(value, values);
  } else if (value !== undefined) {
    values.push(value);
  }

  return values;
}

function sanitizeDescription(description) {
  return description.replace(/\[.*?\]/g, '').trim();
}

function extractProps({ displayName, props = {} }) {
  return {
    name: displayName,
    props: Object.keys(props)
      .filter(prop => props[prop].description !== 'SKIP')
      .reduce(
        (eProps, prop) =>
          Object.assign({}, eProps, {
            [prop]: Object.assign(props[prop], {
              defaultValue: normaliseValue(props[prop].defaultValue),
              description: sanitizeDescription(props[prop].description),
              disabled: props[prop].description.includes('[DISABLED]'),
              type: normaliseValue(props[prop].type),
              values: flattenValues(normaliseValue(props[prop].type)),
            }),
          }),
        {}
      ),
  };
}

module.exports = function(source) {
  let value = {};

  this.cacheable && this.cacheable();

  try {
    value = extractProps(reactDocgen.parse(source));
  } catch (error) {
    /* eslint-disable no-console */
    console.error(error);
  }

  return `module.exports = ${JSON.stringify(value, undefined, 2)}`;
};
