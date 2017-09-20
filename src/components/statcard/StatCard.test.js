import React from 'react';
import renderer from 'react-test-renderer';
import StatCard from './StatCard';

const getComponent = (props = {}) =>
  renderer.create(
    <StatCard { ...props }>Lorem</StatCard>
  );

describe('StatCard', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
