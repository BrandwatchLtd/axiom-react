export function blacklist(props, list) {
  return Object.keys(props).reduce((acc, prop) => {
    if (typeof prop === 'string') {
      if (!list.includes(prop)) {
        acc[prop] = props[prop];
      }
    }

    return acc;
  }, {});
}
