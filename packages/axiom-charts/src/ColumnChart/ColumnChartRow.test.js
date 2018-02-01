import React from 'react';
import renderer from 'react-test-renderer';
import ColumnChartRow from './ColumnChartRow';

const getComponent = (props = {}) =>
  renderer.create(
    <ColumnChartRow { ...props }>
      Lorem
    </ColumnChartRow>
  );

describe('ColumnChartRow', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
