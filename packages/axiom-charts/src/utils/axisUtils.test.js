import { getEquallyDistributedAxisLabels, getAxisUpper } from './axisUtils';

describe('getEquallyDistributedAxisLabels', () => {
  it('defaults to 5 ticks', () => {
    const xAxisLabels = getEquallyDistributedAxisLabels({
      lower: 0,
      upper: 10000,
    });
    expect(xAxisLabels.length).toEqual(5);
  });

  it('provides a minimum of 3 ticks if less is specified', () => {
    const xAxisLabels = getEquallyDistributedAxisLabels({
      lower: 0,
      upper: 10000,
      tickCount: 2,
    });
    expect(xAxisLabels).toMatchSnapshot();
  });

  it('creates equal labels when lower 0, upper 10k, tickCount 6', () => {
    const xAxisLabels = getEquallyDistributedAxisLabels({
      lower: 0,
      upper: 10000,
      tickCount: 6,
    });
    expect(xAxisLabels).toMatchSnapshot();
  });

  it('creates equal labels when lower 1k, upper 10k, tickCount 6', () => {
    const xAxisLabels = getEquallyDistributedAxisLabels({
      lower: 1000,
      upper: 10000,
      tickCount: 6,
    });
    expect(xAxisLabels).toMatchSnapshot();
  });

  it('creates equal labels when lower 70k, upper 1m, tickCount 6', () => {
    const xAxisLabels = getEquallyDistributedAxisLabels({
      lower: 70000,
      upper: 1000000,
      tickCount: 6,
    });
    expect(xAxisLabels).toMatchSnapshot();
  });

  it('creates equal labels when lower -10k, upper 10k, tickCount 11', () => {
    const xAxisLabels = getEquallyDistributedAxisLabels({
      lower: -10000,
      upper: 10000,
      tickCount: 11,
    });
    expect(xAxisLabels).toMatchSnapshot();
  });

  it('creates equal labels when lower 0, upper 1, tickCount 11', () => {
    const xAxisLabels = getEquallyDistributedAxisLabels({
      lower: 0,
      upper: 1,
      tickCount: 11,
    });
    expect(xAxisLabels).toMatchSnapshot();
  });

  it('creates equal labels when lower -1, upper 1, tickCount 7', () => {
    const xAxisLabels = getEquallyDistributedAxisLabels({
      lower: -1,
      upper: 1,
      tickCount: 7,
    });
    expect(xAxisLabels).toMatchSnapshot();
  });

  it('formats label when "labelFormatter" is provided', () => {
    const xAxisLabels = getEquallyDistributedAxisLabels({
      lower: 1000,
      upper: 10000,
      tickCount: 6,
      labelFormatter: v => `formatted ${v} unit`,
    });
    expect(xAxisLabels).toMatchSnapshot();
  });
});

describe('getAxisUpper', () => {
  it('returns 0.05 when max is below or equal 0.05', () => {
    expect(getAxisUpper([0, 0.045])).toEqual(0.05);
    expect(getAxisUpper([0.040, 0.045])).toEqual(0.05);
    expect(getAxisUpper([0.04, 0.05])).toEqual(0.05);
  });

  it('returns 0.1 when max is below or equal 0.1', () => {
    expect(getAxisUpper([0, 0.099])).toEqual(0.1);
    expect(getAxisUpper([0, 0.091])).toEqual(0.1);
    expect(getAxisUpper([0, 0.1])).toEqual(0.1);
  });

  it('returns 0.2 when max is below or equal 0.2', () => {
    expect(getAxisUpper([0, 0.11])).toEqual(0.2);
    expect(getAxisUpper([0, 0.2])).toEqual(0.2);
  });

  it('returns 1 when max is below or equal 1', () => {
    expect(getAxisUpper([0, 0.96])).toEqual(1);
    expect(getAxisUpper([0.9999999, 0.90005])).toEqual(1);
    expect(getAxisUpper([0, 1])).toEqual(1);
  });

  it('returns 10 when max is below or equal 10', () => {
    expect(getAxisUpper([1, 0, 9.6])).toEqual(10);
    expect(getAxisUpper([0, 0, 9.01])).toEqual(10);
    expect(getAxisUpper([10, 0])).toEqual(10);
  });

  it('returns 100 when max is below or equal 100', () => {
    expect(getAxisUpper([0, 1, 2, 91])).toEqual(100);
    expect(getAxisUpper([20, 99, 50])).toEqual(100);
    expect(getAxisUpper([20, 100])).toEqual(100);
  });

  it('returns 300 when max is below or equal 300', () => {
    expect(getAxisUpper([0, 201])).toEqual(300);
  });

  it('returns 1000 when max is below or equal 1000', () => {
    expect(getAxisUpper([200, 999, 100])).toEqual(1000);
    expect(getAxisUpper([200, 1000])).toEqual(1000);
  });

  it('returns 5000 when max is below or equal 5000', () => {
    expect(getAxisUpper([20, 40, 4235])).toEqual(5000);
    expect(getAxisUpper([10, 20, 5000])).toEqual(5000);
  });

  it('returns 10000 when max is below 10000', () => {
    expect(getAxisUpper([20, 40, 9999])).toEqual(10000);
    expect(getAxisUpper([10, 20, 9001])).toEqual(10000);
    expect(getAxisUpper([0, 0, 10000])).toEqual(10000);
  });

  it('returns 100000 when max is below 100000', () => {
    expect(getAxisUpper([20, 0, 99999])).toEqual(100000);
  });
});
