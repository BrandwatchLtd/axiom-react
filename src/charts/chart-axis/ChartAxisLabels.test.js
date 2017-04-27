import React from 'react';
import renderer from 'react-test-renderer';
import { ChartAxisLabels } from 'bw-axiom';

function getComponent() {
  return renderer.create(
    <ChartAxisLabels labels={ ['0%', '50%', '100%'] } />
  );
}

describe('ChartAxisLabels', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
