import React from 'react';
import renderer from 'react-test-renderer';
import ColumnChart from './ColumnChart';
import ColumnChartYAxis from './ColumnChartYAxis';

const getComponent = (props = {}) =>
  renderer.create(
    <ColumnChart chartKey={ [{}] } data={ [{ label: 'test', values: [] }] }>
      <ColumnChartYAxis { ...props }>
          Lorem
        </ColumnChartYAxis>
    </ColumnChart>
  );

describe('ColumnChartYAxis', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with align', () => {
    ['top', 'bottom'].forEach((align) => {
      it(align, () => {
        const component = getComponent({ align });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
