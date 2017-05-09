import React from 'react';
import renderer from 'react-test-renderer';
import { ColumnChartVisual } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ColumnChartVisual { ...props }>
      Lorem
    </ColumnChartVisual>
  );
}

describe('ColumnChartVisual', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
