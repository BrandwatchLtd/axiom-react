import React from 'react';
import renderer from 'react-test-renderer';
import { BarChart } from 'bw-axiom';

function getComponent() {
  return renderer.create(
    <BarChart height={ 256 }/>
  );
}

describe('BarChart', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
