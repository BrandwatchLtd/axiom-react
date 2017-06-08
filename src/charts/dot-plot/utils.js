export function formatData(key, data) {
  const order = key.map(({ color }) => color);

  return data.map(({ label, values }) => ({
    label,
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

export function getLines(data, mouseOverRowIndex, mouseOverColors, rowIndex) {
  const visibleDots = rowIndex === mouseOverRowIndex ? data : data.filter(({ colors }) =>
    !isDotHidden(mouseOverRowIndex, mouseOverColors, rowIndex, colors)
  );

  return visibleDots.slice(0, -1).map(({ colors, value }, index) => ({
    faded: isLineFaded(mouseOverRowIndex),
    fromX: value,
    toX: visibleDots[index + 1].value,
  }));
}

export function getDotColors(mouseOverRowIndex, mouseOverColors, rowIndex, colors) {
  return mouseOverColors.length && colors.length > 1 && mouseOverRowIndex !== rowIndex
    ? colors.filter((color) => mouseOverColors.indexOf(color) > -1)
    : colors;
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
