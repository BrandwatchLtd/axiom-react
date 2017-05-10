import React from 'react';
import renderer from 'react-test-renderer';
import {
  ChartTable,
  ChartTableRows,
  ChartTableRow,
  ChartTableLabel,
  ChartTableVisual,
} from 'bw-axiom';

function createNodeMock() {
  return {
    addEventListener: () => {},
  };
}

function getComponent(props = {}) {
  return renderer.create(
    <ChartTable>
      <ChartTableRows { ...props }>
        <ChartTableRow>
          <ChartTableLabel>Lorem</ChartTableLabel>
          <ChartTableVisual>Lorem</ChartTableVisual>
        </ChartTableRow>
      </ChartTableRows>
    </ChartTable>
  , { createNodeMock });
}

describe('ChartTableRows', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
