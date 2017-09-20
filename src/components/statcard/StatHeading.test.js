import React from 'react';
import renderer from 'react-test-renderer';
import StatHeading from './StatHeading';

const getComponent = (props = {}) =>
  renderer.create(
    <StatHeading { ...props }>Lorem</StatHeading>
  );

describe('StatHeading', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
