export default (data, filter) =>
  data.reduce((grouped, { color, label, values }) => {
    if (filter && !filter.includes(label)) {
      return grouped;
    }

    values.forEach((value, index) => {
      if (!grouped[index]) {
        grouped[index] = [{ colors: [color], labels: [label], value }];
      } else {
        const group = grouped[index].find((group) => group.value === value);

        if (group) {
          group.colors.push(color);
          group.labels.push(label);
        } else {
          grouped[index].push({ colors: [color], labels: [label], value });
        }
      }
    });

    return grouped;
  }, []);
