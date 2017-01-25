import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonIcon } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ButtonIcon { ...props } name="twitter" />
  );
}

describe('ButtonIcon', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with end spacing', () => {
    const component = getComponent({ isEnd: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with start spacing', () => {
    const component = getComponent({ isStart: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with small size', () => {
    const component = getComponent({ size: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with medium size', () => {
    const component = getComponent({ size: 'medium' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with large size', () => {
    const component = getComponent({ size: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
