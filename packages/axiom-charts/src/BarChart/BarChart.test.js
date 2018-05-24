import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import BarChart from './BarChart';
import { getChartKey, getMultiValueData, getXAxisLabels } from './barChartFixture';
import * as utils from './utils';

const getComponent = ({
  data = getMultiValueData(),
  chartKey = getChartKey(),
  labelColumnWidth = '13rem',
  xAxisLabels = getXAxisLabels(),
  ...rest
} = {}) => (
  <BarChart
      { ...rest }
      chartKey={ chartKey }
      data={ data }
      labelColumnWidth={ labelColumnWidth }
      xAxisLabels={ xAxisLabels }/>
);

describe('BarChart', () => {
  it('renders a BarChart with the default configuration', () => {
    const component = getComponent();

    expect(toJson(shallow(component))).toMatchSnapshot();
  });

  it('adds a title for the x-axis when setting the "axisTitle" property', () => {
    const component = shallow(getComponent({
      axisTitle: 'X Axis Title',
    }));

    const chartTableAxisTitle = component.find('ChartTableAxisTitle');

    expect(chartTableAxisTitle.length).toEqual(1);
    expect(toJson(chartTableAxisTitle)).toMatchSnapshot();
  });

  it('hides the keys for the bars when setting the "showKey" property to false', () => {
    const component = shallow(getComponent({
      showKey: false,
    }));

    const chartTableKey = component.find('ChartTableKey');

    expect(chartTableKey.length).toEqual(0);
  });

  it('sets the label for the Benchmark in the keys to the value of the "chartKeyBenchmarkLabel" property', () => {
    const component = shallow(getComponent({
      chartKeyBenchmarkLabel: 'Benchmark Label',
    }));

    const barChartBenchmarkLine = component.find('ChartTableKey BarChartBenchmarkLine');

    expect(barChartBenchmarkLine.length).toEqual(1);
    expect(toJson(barChartBenchmarkLine.parent())).toMatchSnapshot();
  });

  it('adds a DropdownContext to the bars of the BarChart when setting the "DropdownContext" property', () => {
    const props = {
      DropdownContext: jest.fn(),
    };
    const component = shallow(getComponent(props));

    const barChartBars = component.find('BarChartBars').first();

    expect(barChartBars.prop('DropdownContext')).toBe(props.DropdownContext);
  });

  it('hides the label on the bar when the "showBarLabel" property is set to false', () => {
    const props = {
      showBarLabel: false,
    };
    const component = shallow(getComponent(props));

    const barChartBars = component.find('BarChartBars').first();

    expect(barChartBars.prop('barLabel')).toBe(props.barLabel);
  });

  it('renders with the "collapsedVisibleRowCount" property', () => {
    const component = shallow(getComponent({
      collapsedVisibleRowCount: 10,
    }));

    const barChartBars = component.find('ChartTableRows');

    expect(barChartBars.prop('collapsedVisibleRowCount')).toBe(10);
  });

  it('adds "Categories" as the suffix to the expand option when the "expandButtonSuffix" property is set', () => {
    const component = shallow(getComponent({
      expandButtonSuffix: 'Categories',
    }));

    const barChartBars = component.find('ChartTableRows');

    expect(barChartBars.prop('expandButtonSuffix')).toBe('Categories');
  });

  it('zooms when the "zoom" property is set', () => {
    utils.calculateZoom = jest.fn(() => 123);

    const component = shallow(getComponent({
      zoom: true,
    }));

    const chartTableRows = component.find('ChartTableRows');

    expect(chartTableRows.prop('zoom')).toBeTruthy();
    expect(chartTableRows.prop('zoomTo')).toBe(123);
  });

  it('spreads remaining properties on ChartTable', () => {
    const component = shallow(getComponent({
      propertyToPassOn: 'some value',
    }));

    const chartTable = component.find('ChartTable');

    expect(chartTable.prop('propertyToPassOn')).toBe('some value');
  });

  describe('"lower" property', () => {
    it('uses the lowest value in "data" as the lower end when setting no "lower" property', () => {
      const component = shallow(getComponent());

      const chartTableRows = component.find('ChartTableRows');
      const barChartBars = component.find('BarChartBars').first();

      expect(chartTableRows.prop('lower')).toBe(30);
      expect(barChartBars.prop('lower')).toBe(5);
    });

    it('uses the "lower" property as the lower end when it is smaller than the lowest value in "data"', () => {
      const component = shallow(getComponent({
        lower: 2,
      }));

      const chartTableRows = component.find('ChartTableRows');
      const barChartBars = component.find('BarChartBars').first();

      expect(chartTableRows.prop('lower')).toBe(30);
      expect(barChartBars.prop('lower')).toBe(2);
    });

    it('uses the lowest value in "data" as the lower end when the "lower" property is bigger than the lowest value in "data"', () => {
      const component = shallow(getComponent({
        lower: 10,
      }));

      const chartTableRows = component.find('ChartTableRows');
      const barChartBars = component.find('BarChartBars').first();

      expect(chartTableRows.prop('lower')).toBe(30);
      expect(barChartBars.prop('lower')).toBe(5);
    });
  });

  describe('"upper" property', () => {
    it('uses the biggest value in "data" as the upper end when setting no "upper" property', () => {
      const component = shallow(getComponent());

      const chartTableRows = component.find('ChartTableRows');
      const barChartBars = component.find('BarChartBars').first();

      expect(chartTableRows.prop('upper')).toBe(30);
      expect(barChartBars.prop('upper')).toBe(30);
    });

    it('uses the "upper" property as the upper end when the biggest value in "data" is smaller than "upper"', () => {
      const component = shallow(getComponent({
        upper: 40,
      }));

      const chartTableRows = component.find('ChartTableRows');
      const barChartBars = component.find('BarChartBars').first();

      expect(chartTableRows.prop('upper')).toBe(40);
      expect(barChartBars.prop('upper')).toBe(40);
    });

    it('uses the biggest values in "data" as the upper end when the "upper" property is smaller than the biggest value in "data"', () => {
      const component = shallow(getComponent({
        upper: 20,
      }));

      const chartTableRows = component.find('ChartTableRows');
      const barChartBars = component.find('BarChartBars').first();

      expect(chartTableRows.prop('upper')).toBe(30);
      expect(barChartBars.prop('upper')).toBe(30);
    });
  });
});
