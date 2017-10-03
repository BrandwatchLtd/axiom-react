import React from 'react';
import renderer from 'react-test-renderer';
import ColumnChart from './ColumnChart';
import ColumnChartXAxis from './ColumnChartXAxis';

const getComponent = (props = {}) =>
  renderer.create(
    <ColumnChart
        chartKey={ [{ label: 'Lorem', color: 'rose' }] }
        data={ [{ label: 'test', values: {} }] }
        height="10rem">
      <ColumnChartXAxis labelColumnWidth="1rem" { ...props }>
        Lorem
      </ColumnChartXAxis>
    </ColumnChart>
  );

describe('ColumnChartXAxis', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
