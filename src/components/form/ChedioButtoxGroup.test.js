import React from 'react';
import renderer from 'react-test-renderer';
import ChedioButtox from './ChedioButtox';
import ChedioButtoxGroup from './ChedioButtoxGroup';

const getComponent = (props = {}) =>
  renderer.create(
    <ChedioButtoxGroup { ...props }>
      <ChedioButtox
          indicatorClassName="lorem"
          inputClassName="ipsum"
          inputType="checkbox">Lorem ipsum</ChedioButtox>
    </ChedioButtoxGroup>
  );

describe('ChedioButtoxGroup', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
