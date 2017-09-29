import React from 'react';
import renderer from 'react-test-renderer';
import Stats from './Stats';

const getComponent = (props = {}) =>
  renderer.create(
    <Stats { ...props }>Lorem</Stats>
  );

describe('Stats', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
