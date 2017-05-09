import React from 'react';
import renderer from 'react-test-renderer';
import { ColumnChartXAxisLabel } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ColumnChartXAxisLabel { ...props }>
      Lorem
    </ColumnChartXAxisLabel>
  );
}

describe('ColumnChartXAxisLabel', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
