export function formatData(key, data) {
  const order = key.map(({ color }) => color);

  return data.map(({ label, benchmark, values }) => ({
    label,
    benchmark,
    values: Object.keys(values)
      .map((color) => ({ color, value: values[color] }))
      .sort((a, b) => order.indexOf(a.color) - order.indexOf(b.color)),
  }));
}

export function getHighestValue(data) {
  let max = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].benchmark !== undefined && data[i].benchmark > max) {
      max = data[i].benchmark;
    }

    for (const color in data[i].values) {
      if (data[i].values[color] > max) {
        max = data[i].values[color];
      }
    }
  }

  return max;
}
