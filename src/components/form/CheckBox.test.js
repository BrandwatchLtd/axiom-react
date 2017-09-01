import React from 'react';
import renderer from 'react-test-renderer';
import { CheckBox } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <CheckBox { ...props }>Lorem ipsum</CheckBox>
  );
}

describe('CheckBox', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with disabled', () => {
    const component = getComponent({ disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with invalid', () => {
    const component = getComponent({ invalid: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
