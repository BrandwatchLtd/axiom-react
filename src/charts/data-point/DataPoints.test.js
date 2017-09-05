import React from 'react';
import renderer from 'react-test-renderer';
import { DataPoints, DataPoint } from 'bw-axiom';

const getComponent = (props = {}) =>
  renderer.create(
    <DataPoints size="1rem" { ...props }>
      <DataPoint color="blue" />
      <DataPoint color="pink" />
      <DataPoint color="amber" />
    </DataPoints>
  );

describe('DataPoints', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with onClick', () => {
    const component = getComponent({ onClick: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
