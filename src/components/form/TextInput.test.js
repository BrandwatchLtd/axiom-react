import React from 'react';
import renderer from 'react-test-renderer';
import { TextInput, TextInputIcon } from 'bw-axiom';

function getComponent(props = {}, children = 'Lorem ipsum') {
  return renderer.create(
    <TextInput { ...props }>{ children }</TextInput>
  );
}

describe('TextInput', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders when disabled', () => {
    const component = getComponent({ disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders when invalid', () => {
    const component = getComponent({ invalid: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with label', () => {
    const component = getComponent({ label: 'Lorem ipsum' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with size small', () => {
    const component = getComponent({ size: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with size large', () => {
    const component = getComponent({ size: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with style translucent', () => {
    const component = getComponent({ style: 'translucent' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders when valid', () => {
    const component = getComponent({ valid: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with TextInputIcon', () => {
    const component = getComponent({},
      <TextInputIcon name="twitter" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
