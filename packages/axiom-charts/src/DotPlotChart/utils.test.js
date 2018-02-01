import {
  formatData,
  getDotColors,
  getHighestValue,
  getLines,
  isDotFaded,
  isDotHidden,
  isLineFaded,
  isValueHidden,
  isValueStrong,
} from './utils';

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

describe('DotPlot (utils)', () => {
  it('formats data', () => {
    expect(formatData(chartKey, data)).toEqual([{
      label: 'Family',
      benchmark: 100,
      values: [{
        value: 0,
        colors: ['giant-leap'],
      }, {
        value: 50,
        colors: ['critical-mass'],
      }, {
        value: 90,
        colors: ['serene-sea'],
      }],
    }, {
      label: 'Games',
      benchmark: 33,
      values: [{
        value: 40,
        colors: ['giant-leap', 'critical-mass'],
      }, {
        value: 53,
        colors: ['serene-sea'],
      }],
    }, {
      label: 'Family & Parenting',
      benchmark: 33,
      values: [{
        value: 50,
        colors: ['giant-leap', 'critical-mass', 'serene-sea'],
      }],
    }, {
      label: 'Technology',
      benchmark: 33,
      values: [{
        value: 69,
        colors: ['giant-leap'],
      }],
    }, {
      label: 'Books',
      benchmark: 33,
      values: [{
        value: 25,
        colors: ['giant-leap'],
      }, {
        value: 50,
        colors: ['serene-sea'],
      }],
    }]);
  });

  it('it gets highest value', () => {
    expect(getHighestValue(data)).toBe(100);
  });

  describe('with no mouse over', () => {
    it('does not filter colors', () => {
      expect(getDotColors(-1, [], 0, ['red', 'terra-form']))
        .toEqual(['red', 'terra-form']);
    });

    it('hides values', () => {
      expect(isValueHidden(-1, [], 0, ['red', 'terra-form']))
        .toEqual(true);
    });

    it('does not fade the lines', () => {
      expect(isLineFaded(-1, [], 0, ['red', 'terra-form']))
        .toEqual(false);
    });
  });

  describe('with mouse over', () => {
    it('fades the lines', () => {
      expect(isLineFaded(0, [], 0, ['red', 'terra-form']))
        .toEqual(true);
    });

    describe('on other rows', () => {
      it('does not bold the values', () => {
        expect(isValueStrong(1, ['red'], 2, ['red']))
            .toEqual(false);
      });
    });

    describe('on the target row', () => {
      it('does not bold the values', () => {
        expect(isValueStrong(1, ['red'], 1, ['red']))
            .toEqual(true);
      });
    });

    describe('on a single data point', () => {
      describe('on other rows', () => {
        it('hides dots of different colors', () => {
          expect(isDotHidden(1, ['red'], 2, ['terra-form']))
            .toEqual(true);
        });

        it('shows dots of the same color', () => {
          expect(isDotHidden(1, ['red'], 2, ['red']))
            .toEqual(false);
        });

        it('filters stacked dots to the hovered color', () => {
          expect(getDotColors(1, ['red'], 2, ['red', 'terra-form', 'giant-leap']))
            .toEqual(['red']);
        });

        it('does not filter single dots of different colors', () => {
          expect(getDotColors(1, ['giant-leap'], 2, ['red']))
            .toEqual(['red']);
        });

        it('shows values of the same color for single dots', () => {
          expect(isValueHidden(1, ['red'], 2, ['red']))
            .toEqual(false);
        });

        it('shows values of the same color for stacked dots', () => {
          expect(isValueHidden(1, ['red'], 2, ['red', 'giant-leap']))
            .toEqual(false);
        });

        it('hides all lines', () => {
          expect(getLines([
            { colors: ['red'], value: 10 },
            { colors: ['terra-form'], value: 20 },
            { colors: ['giant-leap'], value: 30 },
          ], 33, 1, ['red'], 2)).toEqual([{
            fromBenchmark: false,
            toBenchmark: true,
            faded: true,
            fromX: 10,
            toX: 33,
          }]);
        });
      });

      describe('on the target row', () => {
        it('fades other dots', () => {
          expect(isDotFaded(1, ['giant-leap'], 1, ['red']))
            .toEqual(true);
        });

        it('shows the value of the hovered dot', () => {
          expect(isValueHidden(1, ['red'], 1, ['red']))
            .toEqual(false);
        });

        it('hides the values for the other dots', () => {
          expect(isValueHidden(1, ['red'], 1, ['giant-leap']))
            .toEqual(true);
        });
      });
    });

    describe('on a stacked data point', () => {
      describe('on other rows', () => {
        it('filters stacked dots to the hovered color', () => {
          expect(getDotColors(1, ['red', 'terra-form'], 2, ['red', 'terra-form', 'giant-leap']))
            .toEqual(['red', 'terra-form']);
        });

        it('hides dots of different colors', () => {
          expect(isDotHidden(1, ['red', 'giant-leap'], 2, ['terra-form']))
            .toEqual(true);
        });

        it('hides values of the same color for single dots', () => {
          expect(isValueHidden(1, ['red', 'terra-form'], 2, ['red']))
            .toEqual(true);
        });


        it('hides values of the same color for stacked dots', () => {
          expect(isValueHidden(1, ['red', 'terra-form'], 2, ['red', 'terra-form']))
            .toEqual(true);
        });

        it('shows faded lines between the remaining visible dots', () => {
          expect(getLines([
            { colors: ['red'], value: 10 },
            { colors: ['terra-form', 'giant-leap'], value: 20 },
          ], 33, 1, ['terra-form', 'giant-leap'], 2)).toEqual([{
            fromBenchmark: false,
            toBenchmark: true,
            faded: true,
            fromX: 20,
            toX: 33,
          }]);
        });
      });

      describe('on the target row', () => {
        it('fades other dots', () => {
          expect(isDotFaded(1, ['giant-leap', 'terra-form'], 1, ['red']))
            .toEqual(true);
        });

        it('shows the value of the hovered dot', () => {
          expect(isValueHidden(1, ['red', 'terra-form'], 1, ['red', 'terra-form']))
            .toEqual(false);
        });

        it('shows faded lines between all the dots', () => {
          expect(getLines([
            { colors: ['red'], value: 10 },
            { colors: ['terra-form', 'giant-leap'], value: 20 },
          ], 33, 1, ['terra-form', 'giant-leap'], 1)).toEqual([{
            fromBenchmark: false,
            toBenchmark: false,
            faded: true,
            fromX: 10,
            toX: 20,
          }, {
            fromBenchmark: false,
            toBenchmark: true,
            faded: true,
            fromX: 20,
            toX: 33,
          }]);
        });
      });
    });
  });
});
