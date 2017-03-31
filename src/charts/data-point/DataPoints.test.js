import React from 'react';
import renderer from 'react-test-renderer';
import { DataPoints, DataPoint } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <DataPoints height="1rem" { ...props }>
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

  describe('it renders with type', () => {
    ['grouped', 'stacked'].forEach((type) => {
      it(type, () => {
        const component = getComponent({ type });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
