import React from 'react';
import renderer from 'react-test-renderer';
import { ColumnChartBars } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ColumnChartBars { ...props }>
      Lorem
    </ColumnChartBars>
  );
}

describe('ColumnChartBars', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
