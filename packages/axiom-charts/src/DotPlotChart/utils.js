export const formatData = (key, data) => {
  const order = key.map(({ color }) => color);

  return data.map(({ label, benchmark, values }) => ({
    label,
    benchmark,
    values: Object.keys(values)
      .map((color) => ({ color, value: values[color] }))
      .sort((a, b) => a.value - b.value || order.indexOf(a.color) - order.indexOf(b.color))
      .reduce((acc, { value, color }) => {
        for (const data of acc) {
          if (data.value === value) {
            data.colors.push(color);
            return acc;
          }
        }

        acc.push({ value, colors: [color] });

        return acc;
      }, []),
  }));
};

export const getHighestValue = (data) => {
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
};

export const getLines = (data, benchmark, mouseOverRowIndex, mouseOverColors, rowIndex) => {
  const lines = [];
  const elements = data
    .filter(({ colors }) => mouseOverRowIndex === rowIndex ||
        !isDotHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors));

  if (benchmark !== undefined) {
    elements.push({ colors: [], value: benchmark });
  }

  elements.sort((a, b) => a.value - b.value);

  for (let i = 0; i < elements.length - 1; i++) {
    lines.push({
      fromBenchmark: elements[i].colors.length === 0,
      toBenchmark: elements[i + 1] && elements[i + 1].colors.length === 0,
      faded: isLineFaded(mouseOverRowIndex),
      fromX: elements[i].value,
      toX: elements[i + 1].value,
    });
  }

  return lines;
};

export const getDotColors = (mouseOverRowIndex, mouseOverColors, rowIndex, colors) =>
  mouseOverColors.length && colors.length > 1 && mouseOverRowIndex !== rowIndex
    ? colors.filter((color) => mouseOverColors.indexOf(color) > -1)
    : colors;

export const isBenchmarkFaded = (mouseOverRowIndex) => mouseOverRowIndex !== -1;
export const isLineFaded = (mouseOverRowIndex) => mouseOverRowIndex !== -1;

export const isDotFaded = (mouseOverRowIndex, mouseOverColors, rowIndex, colors) =>
  isDotHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors) &&
    mouseOverRowIndex === rowIndex;

export const isDotHidden = (mouseOverRowIndex, mouseOverColors, rowIndex, colors) =>
  !!mouseOverColors.length && !mouseOverColors.some((color) => colors.indexOf(color) > -1);

export const isValueHidden = (mouseOverRowIndex, mouseOverColors, rowIndex, colors) => {
  if (mouseOverColors.length < 1) {
    return true;
  }

  if (mouseOverColors.length === 1) {
    return isDotHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors);
  }

  return mouseOverRowIndex !== rowIndex ||
    mouseOverColors.some((color) => colors.indexOf(color) === -1);
};

export const isValueStrong = (mouseOverRowIndex, mouseOverColors, rowIndex, colors) =>
  mouseOverRowIndex === rowIndex &&
    !isDotHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors);
