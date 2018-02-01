import React from 'react';
import renderer from 'react-test-renderer';
import ColumnChartXAxisLabel from './ColumnChartXAxisLabel';

const getComponent = (props = {}) =>
  renderer.create(
    <ColumnChartXAxisLabel { ...props }>
      Lorem
    </ColumnChartXAxisLabel>
  );

describe('ColumnChartXAxisLabel', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
