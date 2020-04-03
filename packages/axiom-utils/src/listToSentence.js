export default (list, initial = "") =>
  list.length === 0
    ? ""
    : list
        .slice(1)
        .reduce(
          (acc, item, index, list) =>
            `${acc}${index === list.length - 1 ? " and " : ", "}${item}`,
          `${initial}${list[0]}`
        );
