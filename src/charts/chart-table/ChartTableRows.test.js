import React from 'react';
import renderer from 'react-test-renderer';
import ChartTable from './ChartTable';
import ChartTableRows from './ChartTableRows';
import ChartTableRow from './ChartTableRow';
import ChartTableLabel from './ChartTableLabel';
import ChartTableVisual from './ChartTableVisual';

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
