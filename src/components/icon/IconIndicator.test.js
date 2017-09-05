import React from 'react';
import renderer from 'react-test-renderer';
import { IconIndicator } from 'bw-axiom';

const getComponent = (props = {}) =>
  renderer.create(
    <IconIndicator name="twitter" { ...props } />
  );

describe('IconIndicator', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with color', () => {
    ['success', 'warning', 'error', 'info', 'subtle'].forEach((color) => {
      it(color, () => {
        const component = getComponent({ color });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with size', () => {
    ['small', 'medium', 'large'].forEach((size) => {
      it(size, () => {
        const component = getComponent({ size });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with a primary or secondary style', () => {
    ['primary', 'secondary'].forEach((style) => {
      it(style, () => {
        const component = getComponent({ style });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
