import React from 'react';
import renderer from 'react-test-renderer';
import { DataPoints, DataPoint } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <DataPoints size="1rem" { ...props }>
      <DataPoint color="blue" />
      <DataPoint color="pink" />
      <DataPoint color="amber" />
    </DataPoints>
  );
}

describe('DataPoints', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
