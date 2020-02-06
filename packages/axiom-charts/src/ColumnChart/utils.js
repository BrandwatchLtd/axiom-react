export const formatData = (key, data) => {
  const order = key.map(({ color }) => color);

  return data.map(({ label, subLabel, values }) => ({
    label,
    subLabel,
    values: Object.keys(values)
      .map((color) => ({ color, value: values[color] }))
      .sort((a, b) => order.indexOf(a.color) - order.indexOf(b.color)),
  }));
};
