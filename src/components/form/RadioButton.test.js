import React from 'react';
import renderer from 'react-test-renderer';
import { RadioButton } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <RadioButton { ...props }>Lorem ipsum</RadioButton>
  );
}

describe('RadioButton', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
