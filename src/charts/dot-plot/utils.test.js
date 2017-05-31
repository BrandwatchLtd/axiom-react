import {
  formatData,
  getDotColors,
  getLines,
  isDotFaded,
  isDotHidden,
  isLineFaded,
  isValueHidden,
  isValueStrong,
} from './utils';

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
        colors: ['blue'],
      }, {
        value: 50,
        colors: ['pink'],
      }, {
        value: 100,
        colors: ['lilac'],
      }],
    }, {
      label: 'Games',
      values: [{
        value: 40,
        colors: ['blue', 'pink'],
      }, {
        value: 53,
        colors: ['lilac'],
      }],
    }, {
      label: 'Family & Parenting',
      values: [{
        value: 50,
        colors: ['blue', 'pink', 'lilac'],
      }],
    }, {
      label: 'Technology',
      values: [{
        value: 69,
        colors: ['blue'],
      }],
    }, {
      label: 'Books',
      values: [{
        value: 25,
        colors: ['blue'],
      }, {
        value: 50,
        colors: ['lilac'],
      }],
    }]);
  });

  describe('with no mouse over', () => {
    it('does not filter colors', () => {
      expect(getDotColors(-1, [], 0, ['red', 'green']))
        .toEqual(['red', 'green']);
    });

    it('hides values', () => {
      expect(isValueHidden(-1, [], 0, ['red', 'green']))
        .toEqual(true);
    });

    it('does not fade the lines', () => {
      expect(isLineFaded(-1, [], 0, ['red', 'green']))
        .toEqual(false);
    });
  });

  describe('with mouse over', () => {
    it('fades the lines', () => {
      expect(isLineFaded(0, [], 0, ['red', 'green']))
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
          expect(isDotHidden(1, ['red'], 2, ['green']))
            .toEqual(true);
        });

        it('shows dots of the same color', () => {
          expect(isDotHidden(1, ['red'], 2, ['red']))
            .toEqual(false);
        });

        it('filters stacked dots to the hovered color', () => {
          expect(getDotColors(1, ['red'], 2, ['red', 'green', 'blue']))
            .toEqual(['red']);
        });

        it('does not filter single dots of different colors', () => {
          expect(getDotColors(1, ['blue'], 2, ['red']))
            .toEqual(['red']);
        });

        it('shows values of the same color for single dots', () => {
          expect(isValueHidden(1, ['red'], 2, ['red']))
            .toEqual(false);
        });

        it('shows values of the same color for stacked dots', () => {
          expect(isValueHidden(1, ['red'], 2, ['red', 'blue']))
            .toEqual(false);
        });

        it('hides all lines', () => {
          expect(getLines([
            { colors: ['red'], value: 10 },
            { colors: ['green'], value: 20 },
            { colors: ['blue'], value: 30 },
          ], 1, ['red'], 2)).toEqual([]);
        });
      });

      describe('on the target row', () => {
        it('fades other dots', () => {
          expect(isDotFaded(1, ['blue'], 1, ['red']))
            .toEqual(true);
        });

        it('shows the value of the hovered dot', () => {
          expect(isValueHidden(1, ['red'], 1, ['red']))
            .toEqual(false);
        });

        it('hides the values for the other dots', () => {
          expect(isValueHidden(1, ['red'], 1, ['blue']))
            .toEqual(true);
        });
      });
    });

    describe('on a stacked data point', () => {
      describe('on other rows', () => {
        it('filters stacked dots to the hovered color', () => {
          expect(getDotColors(1, ['red', 'green'], 2, ['red', 'green', 'blue']))
            .toEqual(['red', 'green']);
        });

        it('hides dots of different colors', () => {
          expect(isDotHidden(1, ['red', 'blue'], 2, ['green']))
            .toEqual(true);
        });

        it('hides values of the same color for single dots', () => {
          expect(isValueHidden(1, ['red', 'green'], 2, ['red']))
            .toEqual(true);
        });


        it('hides values of the same color for stacked dots', () => {
          expect(isValueHidden(1, ['red', 'green'], 2, ['red', 'green']))
            .toEqual(true);
        });

        it('shows faded lines between the remaining visible dots', () => {
          expect(getLines([
            { colors: ['red'], value: 10 },
            { colors: ['green'], value: 20 },
            { colors: ['blue'], value: 30 },
          ], 1, ['green', 'blue'], 2)).toEqual([{
            faded: true,
            fromX: 20,
            toX: 30,
          }]);
        });
      });

      describe('on the target row', () => {
        it('fades other dots', () => {
          expect(isDotFaded(1, ['blue', 'green'], 1, ['red']))
            .toEqual(true);
        });

        it('shows the value of the hovered dot', () => {
          expect(isValueHidden(1, ['red', 'green'], 1, ['red', 'green']))
            .toEqual(false);
        });
      });
    });
  });
});
