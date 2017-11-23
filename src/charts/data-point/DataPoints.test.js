import React from 'react';
import renderer from 'react-test-renderer';
import DataPoint from './DataPoint';
import DataPoints from './DataPoints';

const getComponent = (props = {}) =>
  renderer.create(
    <DataPoints size="1rem" { ...props }>
      <DataPoint color="giant-leap" />
      <DataPoint color="critical-mass" />
      <DataPoint color="new-horizon" />
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
