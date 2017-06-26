export function formatData(key, data) {
  const order = key.map(({ color }) => color);
  const highestValue = getHighestValue(data);

  return data.map(({ label, subLabel, values }) => ({
    label,
    subLabel,
    values: Object.keys(values)
      .map((color) => ({
        color,
        valueLabel: values[color],
        value: Math.floor((values[color] / highestValue) * 100),
      }))
      .sort((a, b) => order.indexOf(a.color) - order.indexOf(b.color)),
  }));
}

export function getHighestValue(data) {
  let max = 0;

  for (let i = 0; i < data.length; i++) {
    for (const color in data[i].values) {
      if (data[i].values[color] > max) {
        max = data[i].values[color];
      }
    }
  }

  return max;
}

export function findBarGroupMax ( acc, cur ) {
  if (cur.value > acc.value) {
    return cur.value;
  } else {
    return acc.value;
  }
}

export function arrayOfLength (expectedLength, props, propName, componentName) {
  const arrayPropLength = props[propName].length;

  if (arrayPropLength !== expectedLength) {
    return new Error(
      `Invalid array length ${arrayPropLength} (expected ${expectedLength})` +
      `for prop ${propName} supplied to ${componentName}. Validation failed.`
    );
  }
}
