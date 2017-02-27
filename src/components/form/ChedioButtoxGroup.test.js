import React from 'react';
import renderer from 'react-test-renderer';
import ChedioButtox from './ChedioButtox';
import ChedioButtoxGroup from './ChedioButtoxGroup';

function getComponent(props = {}) {
  return renderer.create(
    <ChedioButtoxGroup { ...props }>
      <ChedioButtox>Lorem ipsum</ChedioButtox>
      <ChedioButtox>Lorem ipsum</ChedioButtox>
    </ChedioButtoxGroup>
  );
}

describe('ChedioButtoxGroup', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
