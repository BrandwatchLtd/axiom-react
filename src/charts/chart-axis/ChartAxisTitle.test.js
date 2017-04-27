import React from 'react';
import renderer from 'react-test-renderer';
import { ChartAxisTitle } from 'bw-axiom';

function getComponent() {
  return renderer.create(
    <ChartAxisTitle>Lorem</ChartAxisTitle>
  );
}

describe('ChartAxisTitle', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
