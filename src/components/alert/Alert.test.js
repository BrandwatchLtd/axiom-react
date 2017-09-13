import React from 'react';
import renderer from 'react-test-renderer';
import { AlertIcon } from 'bw-axiom';

const getComponent = (props = {}) =>
  renderer.create(
    <AlertIcon { ...props } />
  );

describe('AlertIcon', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
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

  describe('renders with style', () => {
    ['primary', 'secondary', 'subtle'].forEach((style) => {
      it(style, () => {
        const component = getComponent({ style });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with type', () => {
    ['success', 'warning', 'error', 'info'].forEach((type) => {
      it(type, () => {
        const component = getComponent({ type });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

});
