import { formatData, flattenValues, hasMultipleValues, calculateZoom } from './utils';

const chartKey = [
  { color: 'giant-leap', label: 'Brand A' },
  { color: 'critical-mass', label: 'Brand B' },
  { color: 'serene-sea', label: 'Brand C' },
];

const data = [{
  label: 'Family',
  benchmark: 100,
  values: {
    'giant-leap': 0,
    'serene-sea': 90,
    'critical-mass': 50,
  },
}, {
  label: 'Games',
  benchmark: 33,
  values: {
    'giant-leap': 40,
    'serene-sea': 53,
    'critical-mass': 40,
  },
}, {
  label: 'Family & Parenting',
  benchmark: 33,
  values: {
    'giant-leap': 50,
    'serene-sea': 50,
    'critical-mass': 50,
  },
}, {
  label: 'Technology',
  benchmark: 33,
  values: {
    'giant-leap': 69,
  },
}, {
  label: 'Books',
  benchmark: 33,
  values: {
    'giant-leap': 25,
    'serene-sea': 50,
  },
}];

describe('BarChart (utils)', () => {
  it('formats data', () => {
    expect(formatData(chartKey, data)).toEqual([{
      label: 'Family',
      benchmark: 100,
      values: [{
        value: 0,
        color: 'giant-leap',
      }, {
        value: 50,
        color: 'critical-mass',
      }, {
        value: 90,
        color: 'serene-sea',
      }],
    }, {
      label: 'Games',
      benchmark: 33,
      values: [{
        value: 40,
        color: 'giant-leap',
      }, {
        value: 40,
        color: 'critical-mass',
      }, {
        value: 53,
        color: 'serene-sea',
      }],
    }, {
      label: 'Family & Parenting',
      benchmark: 33,
      values: [{
        value: 50,
        color: 'giant-leap',
      }, {
        value: 50,
        color: 'critical-mass',
      }, {
        value: 50,
        color: 'serene-sea',
      }],
    }, {
      label: 'Technology',
      benchmark: 33,
      values: [{
        value: 69,
        color: 'giant-leap',
      }],
    }, {
      label: 'Books',
      benchmark: 33,
      values: [{
        value: 25,
        color: 'giant-leap',
      }, {
        value: 50,
        color: 'serene-sea',
      }],
    }]);
  });

  it('it gets a flatt list of all values', () => {
    expect(flattenValues(data)).toMatchSnapshot();
  });

  describe('hasMultipleValues', () => {
    it('returns true when data has multiple values', () => {
      expect(hasMultipleValues(data)).toEqual(true);
    });

    it('returns false when data has just single values', () => {
      const data = [
        {
          label: 'Technology',
          values: {
            'giant-leep': 20,
          },
        },
        {
          label: 'Books',
          values: {
            'serene-sea': 15,
          },
        },
      ];
      expect(hasMultipleValues(data)).toEqual(false);
    });
  });

  describe('calculateZoom', () => {
    describe('when no zoomMax is set', () => {
      it('uses finalUpper as the base for the zoom calculation when finalUpper is larger than dataUpper', () => {
        expect(calculateZoom({
          dataUpper: 10,
          finalUpper: 20,
          finalLower: 5,
        })).toBe(33.33333333333333);
      });

      test('uses dataUpper as the base for the zoom calculation when dataUpper is larger than finalUpper', () => {
        expect(calculateZoom({
          dataUpper: 20,
          finalUpper: 10,
          finalLower: 5,
        })).toBe(300);
      });

      it('results in NaN when dataUpper is equal to finalUpper is equal to finalLower', () => {
        expect(Number.isNaN(calculateZoom({
          dataUpper: 10,
          finalUpper: 10,
          finalLower: 10,
        }))).toBeTruthy();
      });

      describe('when finalLower is bigger than dataUpper and finalUpper', () => {
        it('uses dataUpper as the base for the zoom calculation when dataUpper is larger than finalUpper', () => {
          expect(calculateZoom({
            dataUpper: 20,
            finalUpper: 10,
            finalLower: 30,
          })).toBe(50);
        });

        it('uses finalUpper as the base for the zoom calculation when finalUpper is larger than dataUpper', () => {
          expect(calculateZoom({
            dataUpper: 10,
            finalUpper: 20,
            finalLower: 30,
          })).toBe(200);
        });
      });
    });

    describe('when zoomMax is set', () => {
      describe('when zoomMax is the biggest number', () => {
        it('uses zoomMax as the base for the zoom calculation when it is larger than finalUpper', () => {
          expect(calculateZoom({
            zoomMax: 30,
            dataUpper: 20,
            finalUpper: 10,
            finalLower: 5,
          })).toBe(300);
        });

        it('uses zoomMax as the base for the zoom calculation when it is larger than dataUpper', () => {
          expect(calculateZoom({
            zoomMax: 30,
            dataUpper: 20,
            finalUpper: 10,
            finalLower: 5,
          })).toBe(300);
        });
      });

      describe('when zoomMax is smaller than dataUpper or finalUpper', () => {
        it('uses dataUpper as the base for the zoom calculation when it is the largest number', () => {
          expect(calculateZoom({
            zoomMax: 15,
            dataUpper: 20,
            finalUpper: 10,
            finalLower: 5,
          })).toBe(300);
        });

        it('uses finalUpper as the base for the zoom calculation when it is the largest number', () => {
          expect(calculateZoom({
            zoomMax: 15,
            dataUpper: 10,
            finalUpper: 20,
            finalLower: 5,
          })).toBe(66.66666666666666);
        });
      });

      describe('when zoomMax is smaller than finalLower', () => {
        it('uses dataUpper as the base for the zoom calculation when it is the largest number', () => {
          expect(calculateZoom({
            zoomMax: 5,
            dataUpper: 20,
            finalUpper: 10,
            finalLower: 8,
          })).toBe(600);
        });

        it('uses finalUpper as the base for the zoom calculation when it is the largest number', () => {
          expect(calculateZoom({
            zoomMax: 5,
            dataUpper: 10,
            finalUpper: 20,
            finalLower: 8,
          })).toBe(16.666666666666664);
        });
      });
    });
  });
});
