import React from 'react';
import renderer from 'react-test-renderer';
import { ChartGrid } from 'bw-axiom';

function getComponent() {
  return renderer.create(
    <ChartGrid count={ 11 } />
  );
}

describe('ChartGrid', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
