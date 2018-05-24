export const formatData = (key, data) => {
  const order = key.map(({ color }) => color);

  return data.map(({ label, benchmark, values }) => ({
    label,
    benchmark,
    values: Object.keys(values)
      .map((color) => ({ color, value: values[color] }))
      .sort((a, b) => order.indexOf(a.color) - order.indexOf(b.color)),
  }));
};

export const flattenValues = (data) => {
  return data.reduce((memo, { benchmark, values }) => {
    if (benchmark) {
      memo.push(benchmark);
    }

    memo = memo.concat(...Object.values(values));
    return memo;
  }, []);
};

export const hasMultipleValues = (data) =>
  data.some(({ values }) => Object.keys(values).length > 1);

export const calculateZoom = ({ zoomMax, dataUpper, finalUpper, finalLower }) => {
  const finalZoomMax = Math.max(dataUpper, Math.min(zoomMax !== undefined ? zoomMax : dataUpper, finalUpper));
  const zoomTo = ((finalZoomMax - finalLower) / (finalUpper - finalLower)) * 100;

  return zoomTo;
};
