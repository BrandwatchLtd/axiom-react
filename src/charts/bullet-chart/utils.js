export function formatData(key, data) {
  const order = key.map(({ color }) => color);

  return data.map(({ label, subLabel, values }) => ({
    label,
    subLabel,
    values: Object.keys(values)
      .map((color) => ({ color, value: values[color] }))
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

export function findBarGroupMax ( acc, cur, index ) {
  if (cur.value > acc.value) {
    return { value: cur.value, index: index };
  } else {
    return { value: acc.value, index: index - 1 };
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
