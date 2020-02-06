import groupColorsByValue from './groupColorsByValue';

const input = [{
  label: 'A',
  color: 'red',
  values: [20, 30, 40],
}, {
  label: 'B',
  color: 'blue',
  values: [40, 30, 20],
}, {
  label: 'C',
  color: 'yellow',
  values: [30, 30, 30],
}];

describe('groupColorsByValue', () => {
  test('excludes data sets that are not in the filter array', () => {
    expect(groupColorsByValue(input, ['B', 'C'])).toEqual([[{
      colors: ['blue'],
      labels: ['B'],
      value: 40,
    }, {
      colors: ['yellow'],
      labels: ['C'],
      value: 30,
    }], [{
      colors: ['blue', 'yellow'],
      labels: ['B', 'C'],
      value: 30,
    }], [{
      colors: ['blue'],
      labels: ['B'],
      value: 20,
    }, {
      colors: ['yellow'],
      labels: ['C'],
      value: 30,
    }]]);
  });

  test('groups data sets by value index and colors', () => {
    expect(groupColorsByValue(input)).toEqual([[{
      colors: ['red'],
      labels: ['A'],
      value: 20,
    }, {
      colors: ['blue'],
      labels: ['B'],
      value: 40,
    }, {
      colors: ['yellow'],
      labels: ['C'],
      value: 30,
    }], [{
      colors: ['red', 'blue', 'yellow'],
      labels: ['A', 'B', 'C'],
      value: 30,
    }], [{
      colors: ['red'],
      labels: ['A'],
      value: 40,
    }, {
      colors: ['blue'],
      labels: ['B'],
      value: 20,
    }, {
      colors: ['yellow'],
      labels: ['C'],
      value: 30,
    }]]);
  });
});
