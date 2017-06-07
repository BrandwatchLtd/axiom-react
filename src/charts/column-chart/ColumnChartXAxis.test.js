import React from 'react';
import renderer from 'react-test-renderer';
import { ColumnChart, ColumnChartXAxis } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ColumnChart
        chartKey={ [{}] } data={ [{ label: 'test', values: [] }] }
        labelColumnWidth="10rem">
      <ColumnChartXAxis { ...props }>
        Lorem
      </ColumnChartXAxis>
    </ColumnChart>
  );
}

describe('ColumnChartXAxis', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
