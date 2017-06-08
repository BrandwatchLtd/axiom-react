import { formatData } from './utils';


const chartKey = [
  { color: 'blue', label: 'Brand A' },
  { color: 'pink', label: 'Brand B' },
  { color: 'lilac', label: 'Brand C' },
];

const data = [
  { label: 'Family', values: { blue: 0, lilac: 100, pink: 50 } },
  { label: 'Games', values: { blue: 40, lilac: 53, pink: 40 } },
  { label: 'Family & Parenting', values: { blue: 50, lilac: 50, pink: 50 } },
  { label: 'Technology', values: { blue: 69 } },
  { label: 'Books', values: { blue: 25, lilac: 50 } },
];

describe('DotPlot (utils)', () => {
  it('formats data', () => {
    expect(formatData(chartKey, data)).toEqual([{
      label: 'Family',
      values: [{
        value: 0,
        color: 'blue',
      }, {
        value: 50,
        color: 'pink',
      }, {
        value: 100,
        color: 'lilac',
      }],
    }, {
      label: 'Games',
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
      values: [{
        value: 69,
        color: 'blue',
      }],
    }, {
      label: 'Books',
      values: [{
        value: 25,
        color: 'blue',
      }, {
        value: 50,
        color: 'lilac',
      }],
    }]);
  });
});
