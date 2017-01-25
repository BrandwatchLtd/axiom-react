import React from 'react';
import renderer from 'react-test-renderer';
import { RadioButton, RadioButtonGroup } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <RadioButtonGroup { ...props }>
      <RadioButton>Lorem ipsum</RadioButton>
    </RadioButtonGroup>
  );
}

describe('RadioButton', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
