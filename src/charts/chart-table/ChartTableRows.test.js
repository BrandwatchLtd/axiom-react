import React from 'react';
import renderer from 'react-test-renderer';
import {
  ChartTableRows,
  ChartTableRow,
  ChartTableLabel,
  ChartTableVisual,
} from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ChartTableRows { ...props }>
      <ChartTableRow>
        <ChartTableLabel>Lorem</ChartTableLabel>
        <ChartTableVisual>Lorem</ChartTableVisual>
      </ChartTableRow>
    </ChartTableRows>
  );
}

describe('ChartTableRows', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
