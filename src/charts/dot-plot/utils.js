export function formatData(key, data) {
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

export function getLines(data, benchmark, mouseOverRowIndex, mouseOverColors, rowIndex) {
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
}

export function getDotColors(mouseOverRowIndex, mouseOverColors, rowIndex, colors) {
  return mouseOverColors.length && colors.length > 1 && mouseOverRowIndex !== rowIndex
    ? colors.filter((color) => mouseOverColors.indexOf(color) > -1)
    : colors;
}

export function isBenchmarkFaded(mouseOverRowIndex) {
  return mouseOverRowIndex !== -1;
}

export function isLineFaded(mouseOverRowIndex) {
  return mouseOverRowIndex !== -1;
}

export function isDotFaded(mouseOverRowIndex, mouseOverColors, rowIndex) {
  return isDotHidden(...arguments) && mouseOverRowIndex === rowIndex;
}

export function isDotHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors) {
  return !!mouseOverColors.length && !mouseOverColors.some((color) => colors.indexOf(color) > -1);
}

export function isValueHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors) {
  if (mouseOverColors.length < 1) {
    return true;
  }

  if (mouseOverColors.length === 1) {
    return isDotHidden(...arguments);
  }

  return mouseOverRowIndex !== rowIndex ||
    mouseOverColors.some((color) => colors.indexOf(color) === -1);
}

export function isValueStrong(mouseOverRowIndex, mouseOverColors, rowIndex) {
  return mouseOverRowIndex === rowIndex && !isDotHidden(...arguments);
}
