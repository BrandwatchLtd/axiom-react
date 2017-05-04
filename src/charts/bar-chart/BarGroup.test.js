import React from 'react';
import renderer from 'react-test-renderer';
import { BarGroup } from 'bw-axiom';

function getComponent(props) {
  return renderer.create(
    <BarGroup { ...props } />
  );
}

describe('BarGroup', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
