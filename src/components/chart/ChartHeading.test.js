import React from 'react';
import renderer from 'react-test-renderer';
import { ChartHeading } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ChartHeading { ...props }>Lorem Ipsum</ChartHeading>
  );
}

describe('ChartHeading', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
