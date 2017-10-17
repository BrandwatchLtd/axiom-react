import { formatData, getHighestValue } from './utils';

const chartKey = [
  { color: 'blue', label: 'Brand A' },
  { color: 'pink', label: 'Brand B' },
  { color: 'lilac', label: 'Brand C' },
];

const data = [
  { label: 'Family', benchmark: 100, values: { blue: 0, lilac: 90, pink: 50 } },
  { label: 'Games', benchmark: 33, values: { blue: 40, lilac: 53, pink: 40 } },
  { label: 'Family & Parenting', benchmark: 33, values: { blue: 50, lilac: 50, pink: 50 } },
  { label: 'Technology', benchmark: 33, values: { blue: 69 } },
  { label: 'Books', benchmark: 33, values: { blue: 25, lilac: 50 } },
];

describe('BarChart (utils)', () => {
  it('formats data', () => {
    expect(formatData(chartKey, data)).toEqual([{
      label: 'Family',
      benchmark: 100,
      values: [{
        value: 0,
        color: 'blue',
      }, {
        value: 50,
        color: 'pink',
      }, {
        value: 90,
        color: 'lilac',
      }],
    }, {
      label: 'Games',
      benchmark: 33,
      values: [{
        value: 40,
        color: 'blue',
      }, {
        value: 40,
        color: 'pink',
      }, {
        value: 53,
        color: 'lilac',
      }],
    }, {
      label: 'Family & Parenting',
      benchmark: 33,
      values: [{
        value: 50,
        color: 'blue',
      }, {
        value: 50,
        color: 'pink',
      }, {
        value: 50,
        color: 'lilac',
      }],
    }, {
      label: 'Technology',
      benchmark: 33,
      values: [{
        value: 69,
        color: 'blue',
      }],
    }, {
      label: 'Books',
      benchmark: 33,
      values: [{
        value: 25,
        color: 'blue',
      }, {
        value: 50,
        color: 'lilac',
      }],
    }]);
  });

  it('it gets highest value', () => {
    expect(getHighestValue(data)).toBe(100);
  });
});
